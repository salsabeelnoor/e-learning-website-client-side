import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto container my-10 px-5">
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 1:</span>What is
          Cors?
        </h2>
        <h2 className="text-base font-normal">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 2:</span>Why are
          you using firebase? What other options do you have to implement
          authentication?
        </h2>
        <h2 className="text-base font-normal">
          Firebase is a good choice if you want to deploy a working product on
          the cloud rapidly. Plus, as mentioned, you might want to try it out if
          you need a backend but don't have a backend development background.
          All of these can save a significant amount of development cost, as we
          don't need to pay as high as developing from scratch. Firebase pricing
          is equally flexible. Although there are pay-as-you-go services, you
          can start on a free plan and use primary features if your app is still
          at its prime.
        </h2>
        <h2 className="text-base font-normal">
          <span className="text-base font-semibold py-2 block">
            The alternatives for firebase are
          </span>
          <ul className="list-disc pl-4">
            <li>Auth0</li>
            <li>MongoDB</li>
            <li>JSON Web Token</li>
            <li>Amazon Cognito</li>
          </ul>
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 3:</span>What is
          Cors?How does the private route work?
        </h2>
        <h2 className="text-base font-normal">
          Private Routes in React Router (also called Protected Routes) require
          a user being authorized to visit a route (read: page). So if a user is
          not authorized for a specific page, they cannot access it. The most
          common example is authentication in a React application where a user
          can only access the protected pages when they are authorized (which
          means in this case being authenticated). Authorization goes beyond
          authentication though. For example, a user can also have roles and
          permissions which give a user access to specific areas of the
          application.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 4:</span>What is
          Node? How does Node work?
        </h2>
        <h2 className="text-base font-normal">
          As an asynchronous event-driven JavaScript runtime, Node.js is
          designed to build scalable network applications. In Node, many
          connections can be handled concurrently. Upon each connection, the
          callback is fired, but if there is no work to be done, Node.js will
          sleep.
        </h2>
        <h2 className="text-base font-normal py-2">
          Node.js is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </h2>
      </div>
    </div>
  );
};

export default Blog;
