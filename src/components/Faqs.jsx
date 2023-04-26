import Image from "next/image";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import mail from "../images/mail.png";
import instagram from "../images/instagram.png";
import { Container } from "@/components/Container";

function Link() {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className="text-red-600 underline"
      href="https://bit.ly/expectoo_academy"
    >
      here
    </a>
  );
}
const faqs = [
  [
    {
      question: "How to apply?",
      answer: (
        <>
          Send in your application by simply clicking <Link /> and filling out
          the form.
        </>
      )
    },
    {
      question: "Fees and financial options",
      answer:
        "Our courses are affordable and we offer financial options that allow you to make a 70% installment upfront and the remaining 30% during the course of the program."
    }
  ],
  [
    {
      question: "How long does the program run?",
      answer: "The length of the program is determined by the choice of course."
    },
    {
      question: "Where is the training Venue?",
      answer:
        "The training venue is located at No. 5 Engr. Maxwell Street, Opposite Tehilah Children Hospital, Peter Odilli, Port Harcourt, Rivers"
    }
  ],
  [
    {
      question: "Is the training remote or on-site?",
      answer:
        "Our academy will be implementing a hybrid training model, which combines in-person and online learning, to provide students with a more flexible and interactive educational experience."
    }
  ]
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            I have questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            You can contact us via our social media handles.
          </p>
          <ul role="list" className="mt-3 flex space-x-6">
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-indigo-200 hover:text-indigo-100"
                href=" https://www.facebook.com/expectoong"
              >
                <span className="sr-only">Facebook</span>
                <Image
                  src={facebook}
                  alt="Twitter logo"
                  className="h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-indigo-200 hover:text-indigo-100"
                href="https://www.instagram.com/expectoo_ng"
              >
                <span className="sr-only">Instagram</span>
                <Image
                  src={instagram}
                  alt="Twitter logo"
                  className="h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-indigo-200 hover:text-indigo-100"
                href=" https://twitter.com/expectoo_ng"
              >
                <span className="sr-only">Twitter</span>
                <Image src={twitter} alt="Twitter logo" className="h-10 w-10" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-indigo-200 hover:text-indigo-100"
                href="mailto:expectoo.company@gmail.com"
              >
                <span className="sr-only">Mail</span>
                <Image src={mail} alt="Twitter logo" className="h-10 w-10" />
              </a>
            </li>
          </ul>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
