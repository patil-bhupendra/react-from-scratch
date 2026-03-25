import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      name: "Meta",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$50/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$47/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      name: "Uber",
      datePosted: "3 weeks ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$42/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      name: "Salesforce",
      datePosted: "8 days ago",
      post: "Software Engineer - Frontend",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$51/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/linkedin.com",
      name: "LinkedIn",
      datePosted: "10 weeks ago",
      post: "React.js Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Bengaluru, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.name}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
              tag2={elem.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
