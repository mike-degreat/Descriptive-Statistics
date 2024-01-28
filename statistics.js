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

