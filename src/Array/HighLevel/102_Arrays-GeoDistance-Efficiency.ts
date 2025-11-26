//Rule book
type Vehicle = {
    id: number;
    driver: string;
    route: {from: string; to: string; distanceKm: number; fuelConsumption: number }[];
};

//Data
let fleet: Vehicle[] = [
    {
        id: 1,
        driver: "Alice",
        route: [
            { from: "Delhi", to: "Chennai", distanceKm: 2357, fuelConsumption: 2875 },
            { from: "Mumbai", to: "Pune", distanceKm: 150, fuelConsumption: 180 },
            ],
    },
    {
        id: 2,
        driver: "Bob", 
        route: [
            { from: "Kolkata", to: "Bangalore", distanceKm: 1870, fuelConsumption: 2200 },
            { from: "Hyderabad", to: "Chennai", distanceKm: 625, fuelConsumption: 750 },
            ]
        }  
        ];

        //Efficiency Calculation
        let efficiencyReport = fleet.map(v => {
        let totalDist = v.route.reduce((d, r) => d + r.distanceKm, 0);
        let totalFuel = v.route.reduce((f, r) => f + r.fuelConsumption, 0);
        let efficiency = (totalFuel / totalDist) * 100; // Liters per 100 Km
        return {
            driver: v.driver, efficiency: (totalDist / totalFuel).toFixed(2) + " Km/L", fuelPer100Km: efficiency.toFixed(2) + " L/100Km"
        };
        });

        //Output
        console.log("=== Fleet Efficiency Report===");
        console.table(efficiencyReport);
