// src/index.js

// Importing namespaces and classes from simpleLoan and advancedLoan modules
import simpleLoan, { simple } from './simpleLoan/index.js';
import advancedLoan, { advanced } from './advancedLoan/index.js';
import common from './common/index.js';

// Exporting all the imported modules, classes, and namespaces for external use
export {
    simpleLoan,
    advancedLoan,
    common,
    simple,
    advanced
};
