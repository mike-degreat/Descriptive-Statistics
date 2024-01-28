// takes array of numerical data as input and stores the data internally
class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
}

// before calculating the measures of dispersion we need to derive the measure of central tendency because some key concepts in the measures of dispersion are dependent of some factors of measures of central tendency

// Measures of tendency
// 1. MEAN
function mean() {
    if (this.data.length === 0) {
        return NaN; // Return NaN (Not-a-Number) for an empty array, or handle it as appropriate
    }
    return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
}

// 2. Median
function median() {
    const sorted = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[middle - 1] + sorted[middle]) / 2
      : sorted[middle];
}

//3. Mode
function mode() {
    const counts = {};
    this.data.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
    return Object.keys(counts).reduce((max, key) => {
      return counts[key] > counts[max] ? key : max;
    });
}

//Measures of dispersion
// 1. range
function range() {
    if (this.data.length === 0) {
        return NaN; // Return NaN or handle it as appropriate for empty data
    }
    return Math.max(...this.data) - Math.min(...this.data);
}
// 2. Variance
function variance() {
    const mean = this.mean;
    return this.data.reduce((sum, value) => {
      const diff = value - mean;
      return sum + diff * diff;
    }, 0) / (this.data.length - 1);
}
// 3. Standard Deviation
function standardDeviation() {
    return Math.sqrt(this.variance);
}
// 4. quartiles
function quartiles() {
    const sorted = this.data.slice().sort((a, b) => a - b);
    const q1Index = Math.floor(sorted.length / 4);
    const q3Index = Math.floor(3 * sorted.length / 4);
    return {
      q1: sorted[q1Index],
      q3: sorted[q3Index],
      interquartileRange: sorted[q3Index] - sorted[q1Index],
    };
}
// 5. mean deviation
function meanDeviation() {
    const mean = this.mean;
    return this.data.reduce((sum, value) => {
      return sum + Math.abs(value - mean);
    }, 0) / this.data.length;
}

// Modify sales values (example)
function modifySalesValues(modifierFunction){
     {
    this.data = this.data.map(modifierFunction);
  }
}

//Example
const salesData = [100, 150, 200, 180, 250];
const stats = new DescriptiveStatistics(salesData);

console.log("Mean:", stats.mean);
console.log("Median:", stats.median);
console.log("Mode:", stats.mode);
console.log("Range:", stats.range);
console.log("Variance:", stats.variance);
console.log("Standard Deviation:", stats.standardDeviation);
console.log("Quartiles:", stats.quartiles);
console.log("Mean Deviation:", stats.meanDeviation);


