import React from "react";
import Card from "./components/Card";
const App = () => {
  const jobOpenings = [
    {
      logo: "https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
      company: "Google",
      posted: "5 days ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
      company: "Apple",
      posted: "2 weeks ago",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://imgs.search.brave.com/_E1HH8tG9czj5Ch2yCcnj5NwBhWq3t5YyuVeaRMUWvI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/OTUzLzAwMC9zbWFs/bC9hbWF6b24tcGF5/LWxvZ28tZnJlZS1w/bmcucG5n",
      company: "Amazon",
      posted: "1 week ago",
      role: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      company: "Meta",
      posted: "3 days ago",
      role: "React Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Remote",
    },
    {
      logo: "https://imgs.search.brave.com/brwxt-WRZNuYEuGeGKJxLLW0i1HciDpl-Iyoa_-SvTU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2NS9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
      company: "Microsoft",
      posted: "10 days ago",
      role: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Noida, India",
    },
    {
      logo: "https://imgs.search.brave.com/IHWEyt_j3vun7hSCD0HZ5oUVN3clHHj0HTASS1vrKzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
      company: "Netflix",
      posted: "4 weeks ago",
      role: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Remote",
    },
    {
      logo: "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
      company: "Adobe",
      posted: "6 days ago",
      role: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$46/hr",
      location: "Noida, India",
    },
    {
      logo: "https://imgs.search.brave.com/REIrvqWUv7wJk5mYngaayNnzEvDgIrj6g-rZkrWIevg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgxLzQ1/LzQ5LzgxNDU0OWMz/OTk0ZmFkNjUxYjE2/NDM2NDc1YjVkNDBm/LmpwZw",
      company: "Salesforce",
      posted: "2 days ago",
      role: "Software Developer",
      tag1: "Internship",
      tag2: "Entry Level",
      pay: "$30/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://imgs.search.brave.com/nVy5-Z5Sev6l7CWwBGyjP4EfnMMLVD9_XbrlmnRhqJo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy91/YmVyLXRleHQtd29y/ZC1sb2dvLWltYWdl/LXBuZy03MDE3NTE2/OTQ3MDcyMjZidGVk/bHE2bGczLnBuZz92/PTIwMjYwMzA1MTI",
      company: "Uber",
      posted: "3 weeks ago",
      role: "Data Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://imgs.search.brave.com/UbjU80M723cFj-052XUohvTw4N2cwgTl7_FuO6pzf0Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9o/ZC1haXJibmItbG9n/by13aXRoLXN5bWJv/bC1zaWduLWljb24t/cG5nLWltYWdlLTcw/MTc1MTY5NTEyNTM2/OHcxZmxpdDFib3ou/cG5nP3Y9MjAyNjAz/MTgwNA",
      company: "Airbnb",
      posted: "1 month ago",
      role: "Backend Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Remote",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.company}
            post={elem.role}
            datePosted={elem.posted}
            tag1={elem.tag1}
            brandLogo={elem.logo}
            pay={elem.pay}
            tag2={elem.tag2}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
