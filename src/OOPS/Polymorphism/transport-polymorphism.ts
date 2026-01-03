// transport-polymorphism.ts
// tsc --target ES2020 --experimentalDecorators transport-polymorphism.ts

/////////////////////////////
// 1. Logging Decorator
/////////////////////////////
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    console.log(`🌀 [LOG] ${propertyKey} called with`, args);
    const start = Date.now();
    const result = await original.apply(this, args);
    console.log(`✅ [LOG] ${propertyKey} finished in ${Date.now() - start}ms`);
    return result;
  };
  return descriptor;
}

/////////////////////////////
// 2. Interfaces
/////////////////////////////
interface IReservation {
  bookTicket(): Promise<string>;
  cancelTicket(ticketId: string): Promise<boolean>;
}

/////////////////////////////
// 3. Abstract Class
/////////////////////////////
abstract class Transport implements IReservation {
  constructor(
    public name: string,
    public capacity: number,
    public baseFare: number
  ) {}

  // abstract polymorphic methods
  abstract calculateFare(distance: number): number;
  abstract bookTicket(): Promise<string>;

  async cancelTicket(ticketId: string): Promise<boolean> {
    console.log(`🚫 Cancelled ticket: ${ticketId} for ${this.name}`);
    return true;
  }
}

/////////////////////////////
// 4. Fare Strategy Interfaces
/////////////////////////////
interface FareStrategy {
  compute(base: number, distance: number): number;
}

class NormalFare implements FareStrategy {
  compute(base: number, distance: number): number {
    return base + distance * 5;
  }
}

class PremiumFare implements FareStrategy {
  compute(base: number, distance: number): number {
    return base + distance * 12;
  }
}

class DiscountFare implements FareStrategy {
  compute(base: number, distance: number): number {
    return base + distance * 3;
  }
}

/////////////////////////////
// 5. Concrete Classes (Polymorphism)
/////////////////////////////
class Bus extends Transport {
  constructor(capacity: number, baseFare: number, private fareStrategy: FareStrategy) {
    super('Bus', capacity, baseFare);
  }

  calculateFare(distance: number): number {
    return this.fareStrategy.compute(this.baseFare, distance);
  }

  @Log
  async bookTicket(): Promise<string> {
    await new Promise(r => setTimeout(r, 200)); // simulate delay
    const id = `BUS-${Math.floor(Math.random() * 10000)}`;
    console.log(`🚌 Bus ticket booked successfully: ${id}`);
    return id;
  }
}

class Train extends Transport {
  constructor(capacity: number, baseFare: number, private fareStrategy: FareStrategy) {
    super('Train', capacity, baseFare);
  }

  calculateFare(distance: number): number {
    return this.fareStrategy.compute(this.baseFare, distance) * 0.9; // train discount
  }

  @Log
  async bookTicket(): Promise<string> {
    await new Promise(r => setTimeout(r, 300));
    const id = `TRAIN-${Date.now()}`;
    console.log(`🚂 Train ticket booked: ${id}`);
    return id;
  }
}

class Flight extends Transport {
  constructor(capacity: number, baseFare: number, private fareStrategy: FareStrategy) {
    super('Flight', capacity, baseFare);
  }

  calculateFare(distance: number): number {
    return this.fareStrategy.compute(this.baseFare, distance) + 2500; // surcharge
  }

  @Log
  async bookTicket(): Promise<string> {
    await new Promise(r => setTimeout(r, 400));
    const id = `FLT-${Math.floor(Math.random() * 9000)}`;
    console.log(`✈️ Flight ticket booked: ${id}`);
    return id;
  }
}

class Ship extends Transport {
  constructor(capacity: number, baseFare: number, private fareStrategy: FareStrategy) {
    super('Ship', capacity, baseFare);
  }

  calculateFare(distance: number): number {
    return this.fareStrategy.compute(this.baseFare, distance) * 1.1; // fuel fee
  }

  @Log
  async bookTicket(): Promise<string> {
    await new Promise(r => setTimeout(r, 250));
    const id = `SHIP-${Math.floor(Math.random() * 1000)}`;
    console.log(`🚢 Ship ticket booked: ${id}`);
    return id;
  }
}

/////////////////////////////
// 6. Repository (Generic Abstraction)
/////////////////////////////
interface Identifiable { id: string; }

class Repository<T extends Identifiable> {
  private store = new Map<string, T>();

  async save(item: T): Promise<T> {
    this.store.set(item.id, item);
    return item;
  }

  async getAll(): Promise<T[]> {
    return [...this.store.values()];
  }
}

/////////////////////////////
// 7. Factory Pattern
/////////////////////////////
type TransportType = 'bus' | 'train' | 'flight' | 'ship';

class TransportFactory {
  static createTransport(type: TransportType): Transport {
    switch (type) {
      case 'bus': return new Bus(40, 100, new DiscountFare());
      case 'train': return new Train(200, 150, new NormalFare());
      case 'flight': return new Flight(180, 1000, new PremiumFare());
      case 'ship': return new Ship(500, 400, new NormalFare());
      default: throw new Error('Invalid transport type');
    }
  }
}

/////////////////////////////
// 8. Booking Service (Polymorphic Engine)
/////////////////////////////
class BookingService {
  constructor(private repository: Repository<{ id: string; type: string; fare: number }>) {}

  @Log
  async makeBooking(type: TransportType, distance: number) {
    const transport = TransportFactory.createTransport(type);
    const fare = transport.calculateFare(distance);
    const ticketId = await transport.bookTicket();
    await this.repository.save({ id: ticketId, type: transport.name, fare });
    console.log(`💳 Fare for ${transport.name}: ₹${fare}`);
    return { ticketId, type: transport.name, fare };
  }

  async showAllBookings() {
    const all = await this.repository.getAll();
    console.log('🧾 All Bookings:', all);
  }
}

/////////////////////////////
// 9. Demo
/////////////////////////////
async function main() {
  const repo = new Repository<{ id: string; type: string; fare: number }>();
  const service = new BookingService(repo);

  await service.makeBooking('bus', 50);
  await service.makeBooking('train', 120);
  await service.makeBooking('flight', 900);
  await service.makeBooking('ship', 300);

  await service.showAllBookings();
}

main().catch(console.error);
