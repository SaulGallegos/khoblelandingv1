import { Html, Main, Head, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='We are building an AI-driven job platform that will change the way students find their ideal careers. 

We focus on connecting students with not only well-compensated jobs, but also opportunities that align with their passions and interests, fostering long-term employee engagement and talent retention. Our Airbnb-inspired interface allows students to explore job postings while businesses search for potential talent. 

By leveraging AI and machine learning, Khoble will streamline the job application process and offer personalized job matching, enabling students to apply instantly and efficiently. Khoble will also act as an all-in-one platform to help businesses manage their recruitment process.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
