import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";

import { Container } from "@/components/Container";

const reviews = [
  {
    title: "More than Expected.",
    body: "I had the privilege of being an intern with Expectoo, and it was truly an incredible experience. Not only did I learn so much about the industry and gain valuable skills, but I also felt like a valued member of the team from day one. The company's commitment to nurturing and developing young talent is truly exceptional, and I am grateful for the opportunity to have been a part of it.",
    author: "Peace",
    rating: 5
  },
  {
    title: "You need this.",
    body: "As someone who was new to the world of software development, I was unsure of what to expect when I began my internship with this Expectoo. But from the first day, I was blown away by the level of support, guidance, and mentorship that I received. The programme was structured in a way that allowed me to gain hands-on experience working on real projects, and the team was always there to answer my questions and help me grow. From my experience with them, I would highly recommend Expectoo Academy to anyone looking to kickstart their career in software development.",
    author: "Precious",
    rating: 5
  },
  {
    title: "I love it.",
    body: "Expectoo's internship programme is truly top-notch. The company's commitment to providing a supportive, inclusive, and collaborative environment is evident in every aspect of the programme, from the training sessions to the daily work. As an intern, I was given meaningful work that allowed me to develop my skills and contribute to the team's success. The company's dedication to investing in young talent is truly commendable, and I am grateful for the opportunity to have been a part of it.",
    author: "Ralph",
    rating: 5
  },
  {
    title: "Brilliant",
    body: "I cannot speak highly enough of this software development company's internship programme. The programme was designed to provide interns with a comprehensive understanding of the industry and the tools and technologies used in software development. The team went above and beyond to ensure that we had access to the resources and support we needed to succeed, and I truly felt like a valued member of the team. Thanks to this internship, I have gained invaluable experience and developed skills that will stay with me throughout my career.",
    author: "Emmanuel",
    rating: 5
  },
  {
    title: "Amazing",
    body: "The internship programme offered by Expectoo is simply outstanding. From the first day, I was welcomed into a supportive and dynamic team environment that fostered my growth as a software developer. The company provided me with challenging and meaningful projects that allowed me to apply the skills and knowledge I had gained in a real-world setting. I am so grateful for this opportunity and would highly recommend Expectoo Academy to anyone looking to gain valuable experience in the software development industry.",
    author: "Blessing"
  }
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-cyan-500" : "fill-gray-300"
          )}
        />
      ))}
    </div>
  );
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s"
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0
}) {
  let columnRef = useRef();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  "md:hidden",
                reviewIndex >= columns[0].length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && "lg:hidden"
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Don’t just take our word for it!
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          See What Our Interns Have to Say About Their Experience!
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
}
