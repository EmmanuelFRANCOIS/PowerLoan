/**
 * Represents a simple loan with properties and methods to manipulate and calculate loan data.
 */
class SimpleLoan {

  /**
   * Default properties for a simple loan.
   */
  static defaultSimpleLoan = {
    id: null, // Auto increment (from db), no default in class, should be set externally
    uuid: uuidv4(),
    lender: "",
    lenderContact: "",
    lenderAddress: "",
    lenderContactPhone: "",
    lenderContactEmail: "",
    lenderContractRef: "",
    lenderContractDate: "",
    destination: "realEstate",
    active: false,
    calculationMode: "repayment",
    capital: 100000,
    beginDate: moment()
      .add(1, "months")
      .startOf("month")
      .format("YYYY-MM-DDT12:00:00Z"),
    endDate: moment()
      .add(121, "months")
      .startOf("month")
      .format("YYYY-MM-DDT12:00:00Z"),
    durationPeriods: 120,
    durationTime: 120,
    interestType: "simple",
    interestRate: 0.03,
    repaymentPeriodicity: "monthly",
    repayment: 1000,
  };

  /**
   * Constructs a SimpleLoan loanInstance with provided data or default values.
   * @param {Object} loanData - Data to initialize the loan properties.
   */
  constructor(loanData = {}) {
    Object.keys(SimpleLoan.defaultSimpleLoan).forEach((key) => {
      this[`_${key}`] = loanData[key] || SimpleLoan.defaultSimpleLoan[key];
    });
    // Additional initialization or validation logic can go here
  }

}

export default SimpleLoan;