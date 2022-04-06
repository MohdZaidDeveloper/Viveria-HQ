import {useState} from 'react';
import { Link } from 'react-router-dom';

const Accodian = () => {

const data = [
  {
    id: 1,
    question: "What is Earned Wage Access (EWA)? ",
    answer:
      "Earned Wage Access (EWA) or On-demand salary is a service where an employer lets employees access a portion of their real-time earned salary any time before the actual payday. The remainder of the salary is credited to the employee on the scheduled payday as usual.",
  },
  {
    id: 2,
    question: "How does Viveria HQ work?",
    answer:
      "Viveria HQ plug and play solution integrates seamlessly with the employer’s attendance and payroll management system and uses this data to provide real-time earned salary access to the staff. The employer’s working capital status does not undergo any change. Viveria HQ fronts the withdrawal and credits the money to the employees’ salary account, without disrupting the organization’s payroll process.",
  },
  {
    id: 3,
    question: "How long does deployment with an employer take?",
    answer:
      "Viveria HQ integration on an average takes anywhere from 1 to 4 weeks and each partnering employer is assigned a dedicated account manager for support throughout the process.",
  },
  {
    id: 4,
    question: "How does Viveria HQ work for employees?",
    answer:
      "Employees can sign up on Viveria HQ app (Android) or via a web browser (iOS). Viveria HQ connects the employee’s data provided by the employer, allowing staff members to track their salary details, including the amount they can retrieve and balance earned salary.",
  },
  {
    id: 5,
    question: "What about data Security and Compliance?",
    answer:
      "Viveria HQ stores sensitive data securely behind a firewall, which is accessible only to parties with explicit permission from the user.",
  },
  {
    id: 6,
    question:
      "What is the maximum percentage for employee’s Salary Withdrawal?",
    answer:
      "Based on your attendance and monthly salary, Viveria HQ calculates your earned salary daily, which you can see on Viveria HQ app and a percentage limit on the withdrawal is set by your employer and HR. You can check this limit on the Viveria HQ app real-time.",
  },
  {
    id: 7,
    question: "What are the charges?",
    answer:
      "Unlike other financial products, Viveria HQ does not charge any interest, convenience or documentation charges. We only charge a per-transaction processing fee that could be as low as INR 9/- (GST excluded). You can see the detailed fee breakup on the app at the time of salary withdrawal.",
  },
  // {
  //   id: 8,
  //   question: "What Should I be charged?",
  //   answer:
  //     "Access to earned salary before the payday requires various partners like banking, technology, payroll to incur costs to make the facility available to employees. The processing fee enables Viveria HQ to provide you on-demand pay to suit your needs.",
  // },
  {
    id: 9,
    question: "Why should I be charged?",
    answer:
      "Access to earned salary before the payday requires various partners like banking, technology, payroll to incur costs to make the facility available to employees. The processing fee enables Viveria HQ to provide you on-demand pay to suit your needs.",
  },
  {
    id: 10,
    question: "How much interest do I need to Pay?",
    answer:
      "Refyne does not charge any interest. You only need to pay only a fixed per-transaction processing fee.",
  },
  {
    id: 11,
    question:
      "My error message Says ‘Unregistered user contact you HR’ - What Should I do? ",
    answer:
      "When you sign up using your email, we verify the address against the data provided by your employer. This error is displayed because (a) Your email and details have not been uploaded by your employer’s HR team, or (b) You’re using a different email address that does not match the one provided by your employer. You can contact your HR team to check the status for both cases.",
  },
  {
    id: 12,
    question: "Why do I need to complete KYC?",
    answer:
      "As per the Reserve Bank of India (RBI) guidelines, in order for banks or NBFCs to transfer any amount to a customer’s account, KYC process must be mandatorily completed. This is a one-time process and it takes less than two minutes to upload the documents directly on Viveria HQ app.",
  },
  {
    id: 13,
    question: "What is the duration for verification of uploaded documents?",
    answer: "The verification processing is instant, not more than two hours.",
  },
  {
    id: 14,
    question: "Which documnets are accepted as address proof?",
    answer:
      "The best way to verify the address is Aadhaar based authentication. However, you need to ensure your mobile number is linked with your Aadhaar. Viveria HQ also accepts driver’s license, voter’s card, rental agreement or a Letter from your employer’s HR as address proof.",
  },
  {
    id: 15,
    question: "Why do I need  to add my bank details?",
    answer:
      "When an employee requests a salary withdrawal, Viveria HQ transfers the amount directly to their bank account. Therefore, we require you to enter bank details to authenticate account owner details.",
  },
  {
    id: 16,
    question: "Why Was INR 1 deposited in my account?",
    answer:
      "After an employee provides us bank details, we deposit INR 1 to authenticate the account, which helps us ensure that account belongs to the registered employee.",
  },
  {
    id: 17,
    question:
      "I’ve received an email that my KYC is incomplete. How can I fix this? ",
    answer:
      "Your KYC could be incomplete due to following reasons (a) Your uploaded selfie doesn’t match the specifications mentioned (b) Your PAN details have not been uploaded as per the set format (c) There’s discrepancies with your address proof or (d) Your bank details don't match your personal details. The app will guide you to upload the right document.",
  },
  {
    id: 18,
    question: "Why did I get less money than I’d requested?",
    answer:
      "We deduct the processing fee for the salary withdrawal amount and deposit the balance amount in your bank account. Refyne sends the details of the fee as a withdrawal summary to your registered email. This can also be found on the app.",
  },
  {
    id: 19,
    question: "What’s the difference between a credit card and Viveria HQ?",
    answer:
      "Currently only 4% of India’s population uses credit cards, paying service and interest charges. Refyne is an employee benefit app, which charges zero interest. Employees can withdraw their earned salary before the company’s payday at a flat transaction fee.",
  },
  {
    id: 21,
    question: "Is my basic salary per day visible on Viveria HQ?",
    answer: "No, your Net payable salary is visible on the app.",
  },
  {
    id: 22,
    question:
      "Are there any charges for only tracking my salary on Viveria HQ?",
    answer: "No, tracking is free.",
  },
  {
    id: 23,
    question: "Will there be any difference in my pay slip?",
    answer:
      "Transactions by employees will be reconciled/adjusted in their salary and reflected in their salary slip.",
  },
  {
    id: 24,
    question: "Are Aadhaar and PAN numbers mandatory?",
    answer:
      "Yes, Viveria HQ uses the details for the photo and address verification process.",
  },
  {
    id: 25,
    question: "Can I add a different account number on Viveria HQ app?",
    answer:
      "Yes, but the account should be registered under the employee’s name.",
  },
  {
    id: 27,
    question: "Will Viveria HQ be available after the COVID-19 pandemic?",
    answer:
      "Yes, while Viveria HQ is useful during a crisis, it can be also be used to cover non-critical, routine and leisure expenses.",
  },
  {
    id: 27,
    question:
      "What’s the procedure after an employee exits the company & attempts to withdraw salary from Viveria HQ?",
    answer:
      "Post exit, an employee’s salary withdrawal cap lock date can be set at the HR's discretion.",
  },
];

 const [selected, setSeleted] = useState(null);

 const toggle = (i) => {
   if (selected === i) {
     return setSeleted(null);
   }
   setSeleted(i);
 };


  return (
    <section className="accordian-container">
      <h1>Got questions? We've got you covered!</h1>

      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <p>{item.question}</p>
              <img
                src={require("../../../Assets/downArrow.png")}
                className={selected === i && "reverse"}
                alt=""
              />
            </div>

            <div className={selected === i ? "content show" : "content"}>
              <p onClick={() => toggle(i)}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <h1>
        Wondering how on-demand salary access can work for your organization?
      </h1>

      <Link to="/contact-us">
        <button>
          Get Started
          <img src={require("../../../Assets/rightArrow.png")} alt="" />
        </button>
      </Link>
    </section>
  );
}

export default Accodian