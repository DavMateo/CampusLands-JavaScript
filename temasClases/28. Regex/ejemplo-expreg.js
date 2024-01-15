const names = ["Pedro", "Sara", "Miriam", "Nestor", "Adrián", "Sandro"];

// Comprobación sin usar expresiones regulares
names.forEach(function(name) {
    const firstLetter = name.at(0).toLowerCase();
    const lastLetter = name.at(-1).toLowerCase();

    if ((firstLetter === "p" || firstLetter === "s") && (lastLetter === "o" || lastLetter === "a")) {
        console.log(`El nombre ${name} cumple las restricciones.`);
    }
});

console.log();

// Comprobación usando expresiones regulares
names.forEach(function(name) {
    const regex = /^(p|s).+(o|a)$/i;

    if (regex.test(name)) {
        console.log(`El nombre ${name} cumple las restricciones.`);
    }
});