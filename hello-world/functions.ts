function calculateTax(income: number, state: string, taxYear: number): number {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.4;
}
calculateTax(10_000, "CA", 2022);

// Useful parameters
// "noUnusedLocals": true,
// "noUnusedParameters": true,
// "noImplicitReturns": true,
