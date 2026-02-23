import HeadshotCard from "./ui/cards/HeadshotCard";
import CosmosHeadshot from "@/assets/images/shared/Cosmos_Headshot.png";

export default function OurTeam() {
  return (
    <div className="flex flex-col gap-2xl my-3xl mx-xl md:mx-35">
      <div className="space-y-2xl">
        <div>
          <h1 className="text-acc ent-sm text-cyan-400 mb-xl">
            Meet The Organizers
          </h1>
          <h2 className="text-heading-lg text-neutral-100">Our Team</h2>
        </div>
        <p className="text-body-sm text-neutral-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque
          tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse
          potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam,
          eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl mb-2xl">
          <HeadshotCard
            role="Co-Chair"
            name="Jennifer Huang"
            bio="Hii! I'm Jennifer, a 3rd-year Software Systems student at SFU. I'm so grateful to have helped bring Hack the Galaxy to life as one of the co-chairs this year. I hope to continue creating a welcoming space for WiCS members through our events. ⸜( ´ ꒳ ` )⸝♡"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Co-Chair"
            name="Sydney Komanac"
            bio="Hi! I'm Sydney, a 2nd year Computing Science & Biochemistry student at SFU. Super grateful to have co-lead this event for WiCS, and I look forward to meeting and making memorable experiences with you all!! Ask me about my jewelry, favourite artists, or cats :D"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
          <HeadshotCard
            role="Finance & Sponsorship"
            name="Mara Liwayway David"
            bio="Hi everyone! I'm Mara, a 3rd-year Computing Science student at SFU. It's with great honour that I'm part of the organizing committee for SFU WiCS' first-ever hackathon. If this is your first hackathon or you need advice on anything, come say hi and let's chat! :D"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Finance & Sponsorship"
            name="An Nguyen"
            bio="hello everyone! I'm An, a 4th-year CS student pursuing an IAT minor and I'm excited to be one of the Finance & Sponsorship Coordinators. WiCS has given me incredible support from friendships to skill growth and I hope Hack the Galaxy offers you the same opportunities!"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Finance & Sponsorship"
            name="Tina Kaur"
            bio="Hi! I am Tina! I'm on the Finance & Sponsorship team to bring the first-ever WiCS Hackathon to life. So stoked to meet you all and see your projects in action! ✨🚀"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
          <HeadshotCard
            role="Operations & Logistics"
            name="Serena Dhillon"
            bio="Hi! I'm Serena, a fourth-year Computing Science major with a Psychology minor. In my free time, I like to go for walks, read, paint and play video games. I'm excited to be a part of the Hack the Galaxy team this year and can't wait to see all the amazing projects!!"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Operations & Logistics"
            name="Meyer Sarna"
            bio="I'm a third-year Software Systems student, and I'm so excited to be part of this year's Hackathon team! In my free time, I love reading, exploring cafés, and spending time in nature:)"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Operations & Logistics"
            name="Laraib Yousfani"
            bio="Hi! I'm Laraib Yousfani, a third-year student at SFU, and part of Hack The Galaxy planning committee. As part of the Operations & Logistics team, I help ensure everything runs smoothly behind the scenes. I'm excited to support an amazing event for the WiCS community!"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
          <HeadshotCard
            role="Recruitment"
            name="Felicia Jiang"
            bio="Hi, my name is Felicia and I'm one of Hack-The-Galaxy's Recruitment Coordinator! You might also know me as WiCS' Co-Presidents but I'm super excited to contribute to such an wonderful community <3 My energy is almost limitless so I love chatting away to use it all up ><"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Recruitment"
            name="Chhaya Pradhan"
            bio="Hi! I'm Chhaya, a second-year Computing Science student. In my free time, I like exploring new places and restaurants when my student budget cooperates... Super excited to be helping bring Hack the Galaxy to life and can't wait to meet everyone!!"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Recruitment"
            name="Julia Lee"
            bio="I'm a Computing Science student at SFU and graduating this summer. I'm so excited and grateful to be part of WiCS's first annual hackathon before I graduate! I love baking sweets and enjoying sunny days, and I can't wait to meet amazing people at Hack the Galaxy 2026 :)"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
          <HeadshotCard
            role="Visual Design & Marketing"
            name="Bianca Dimaano"
            bio="Hi, I'm Bianca! I'm a 4th-year CS major and IAT minor at SFU, currently on co-op as a Product Designer. I'm super excited to help shape the visual identity of Hack the Galaxy's first iteration! Looking forward to meeting everyone and seeing all the cool projects :D"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Visual Design & Marketing"
            name="Emily Quan"
            bio="Hi! I'm Emily, a 3rd-year CS student with an IAT minor. I'm so excited to be on the Visual Design team, and I can't wait to meet you all! When I'm not designing or coordinating technical events for WiCS, you can find me reading, painting, or loving all things Snoopy <3"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
          <HeadshotCard
            role="Visual Design & Marketing"
            name="Audrey Safikhani"
            bio="Hi! I'm Audrey and I'm the Marketing coordinator for Hack the Galaxy =) I'm very passionate about photography and visual storytelling, and I can't wait to bring all our amazing WiCS stories to life this year. Fun fact about me is that I'm a rookie AI/ML researcher"
            image={CosmosHeadshot.src}
          ></HeadshotCard>
        </div>
      </div>
    </div>
  );
}
