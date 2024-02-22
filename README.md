# PowerLoan

**PowerLoan** is a comprehensive JavaScript library for performing a wide range of loan calculations. 
**PowerLoan** provide common, simple, and advanced loan calculations functions, making it suitable for a variety of financial applications. 
**PowerLoan** library is organized into three main packages: common, simple, and advanced, each containing functions tailored to different levels of calculation complexity.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

NOTABLY, THE AUTHOR OF POWERLOAN IS NOT A BANKER, LENDER, FINANCIAL ADVISOR NOR EXPERT IN FINANCE. CONSEQUENTLY, THERE IS NO WARRANTY THAT THE RESULTS OF CALCULATIONS ARE EXACT, PRECISE, OR SUITABLE FOR ANY SPECIFIC FINANCIAL DECISIONS. THE CALCULATED RESULTS FROM THIS LIBRARY CANNOT AND SHOULD NOT BE USED AS LEGAL EVIDENCE, FINANCIAL ADVICE, OR A DEFINITIVE BASIS FOR MAKING FINANCIAL COMMITMENTS OR DECISIONS. USERS MUST EXERCISE THEIR JUDGMENT AND ASSUME ALL RISKS ASSOCIATED WITH THE USE OF POWERLOAN, ACKNOWLEDGING THAT THE AUTHOR IS NOT RESPONSIBLE FOR ANY FINANCIAL LOSS, DISCREPANCIES IN CALCULATION OUTCOMES, OR ANY ADVERSE CONSEQUENCES RESULTING FROM THE APPLICATION OF INFORMATION OBTAINED FROM THIS SOFTWARE.

## Features

- two classes ready for use : **simpleLoan** and **advancedLoan**
  - **simpleLoan** class implement basic loan properties : capital, duration, interest type and rate, repayment periodicity and amount...
  - **advancedLoan** class implement advanced loan properties : capital borrowed and releases, duration, interest type and rate, fees, insurance, repayment delay, periodicity and amount, early repayment...
- class **members** (properties) with default values and validation
- many **internal automatic calculations** to simplify library usage and implementation
- complete set of **simple and advanced Loan calculations**
- **modular architecture** :
    - allowing for easy integration and customization
    - built with **ESM (ES Modules)** ready for tree shaking and bundle size optimization
- high precision calculations using **big.js** library
- extensive date manipulation capabilities with **Day.js** library
- fully tested with automated **unit testing** (thanks to Jest)
- fully **documented** (thanks to JSDoc)
- published on **NPM** to be integrated in web or mobile Javascript apps

## Warning - Missing advanced features

I decided to publish **PowerLoan** on GitHub and NPM to offer to beginning developers an example as complete and well organized as possible, as a starting point or template to help them build their own JS libraries.

However, I'm building **PowerLoan** library mainly to be used by my **MyLoans** web and mobile app.

And I want this **MyLoans** app to keep a competitive edge toward other loan calculation apps available on the web or on app stores.

This is the reason why :
- I don't provide **AdvancedLoan class** nor **advanced functions** code for now.
- Only the **powerLoan-light.js** and **powerLoan-light.min.js** will be publicly available for now.
These packages include SimpleLoan class and common and simple loan calculation functions.

## Installation

Install **PowerLoan** using npm:

```bash
npm install powerloan
```

Or using yarn:

```bash
yarn add powerloan
```

## Documentation

**PowerLoan** full documentation has been automatically generated (thanks to JSDoc library) and is available into the "doc" folder.

## Contributing

We welcome contributions to **PowerLoan**! Please read our Contributing Guide for details on how to submit pull requests and suggestions.

## Support

If you have any questions or issues about **PowerLoan**, please open an issue on our GitHub issue tracker.

## Author

**PowerLoan** was created by **Emmanuel FRANCOIS**, a full stack web and mobile developer specialised in developing PWAs (Progressive Web Apps), Web Apps and Mobile applications with web technologies like REACT, MUI, CHAKRA UI, IONIC..., as well as Backend applications (with PHP, MySQL...) and REST APIs with Node.js, Express.js, Sequelize, MySQL...

**Emmanuel FRANCOIS**'s website can be found here : [https://emmanuelfrancois.fr](https://emmanuelfrancois.fr)

## Copyright

Copyright (c) 2024 Emmanuel FRANCOIS - Hauts-de-France - France. All rights reserved.

## License

PowerLoan is MIT licensed.

