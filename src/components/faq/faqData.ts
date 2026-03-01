export interface FAQ {
  question: string;
  answer: string;
}


// Change the answers for the FAQ section here + add any more questions
export const faqs: FAQ[] = [
  {
    question: "What is a hackathon?",
    answer: `A hackathon is an event where teams of up to 4 people collaborate on a project, or "hack" within a tight time limit. At Hack the Galaxy, teams will collaborate over 12 hours to build ideas from the ground up in a welcoming, supportive environment. There will be technical workshops leading up to the event and local mentors providing guidance to help hackers develop their projects. Our hackathon is open to hackers regardless of experience level, and we aim to offer an empowering opportunity to learn, connect, and grow in technology.`,
  },
  {
    question: "Who can participate?",
    answer: `Hack the Galaxy welcomes all individuals who identify as a gender minority in technology. This includes, but is not limited to, women, non-binary, agender, and intersex individuals. We also invite students from various backgrounds and post-secondary institutions. If you have any further questions regarding eligibility, feel free to email us at wics@sfu.ca.`,
  },
  {
    question: "How can I support the event as an ally?",
    answer: `Our event is made to empower underrepresented genders in tech. As an ally, we encourage you to support our initiative and goal from afar - sharing the event with people you know is a great start!\n\nIf you are interested in having a more active ally role in future iterations, such as a sponsor or judge, please reach out to us at wics@sfu.ca.`,
  },
  {
    question: "When does hacking begin?",
    answer: `Hacking begins after the opening ceremony. All design and code for your project must be strictly completed between 10:00 AM and 6:00 PM on Saturday, March 14th, but you are welcome to brainstorm ideas before the event!`,
  },
  {
    question: "What if I don’t have a team?",
    answer: `Don’t worry! We will have a channel dedicated to helping with team formation in our Hackathon Discord Server to be shared with successful applicants. We will also help facilitate team formation after the opening ceremony for those in need.`,
  },
  {
    question: "Do I have to submit a project?",
    answer: `It is highly encouraged to submit a project, but not required. We want to create a supportive space that focuses on learning and growth over a strictly finalized goal. However, submitting a project is the only way to be eligible for any of our prize tracks. `,
  },
  {
    question: "What are the prizes for projects?",
    answer: `We have a variety of prize categories, including a Top 3, Best Beginner Hack, Sponsored Tracks, and more! Some prizes include tech gadgets and exclusive networking opportunities 👀\n\n More information on prize tracks and judging criteria will become available to accepted hackers closer to the event date.`,
  }
];