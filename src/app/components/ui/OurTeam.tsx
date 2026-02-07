import Head from "next/head";
import HeadshotCard from "./cards/HeadshotCard";

export default function OurTeam() {
  return (
    <div className="mt-3xl mr-xl mb-3xl ml-xl">
      <div className="flex flex-col gap-lg pb-lg">
        <h1 className="text-acc ent-sm text-cyan-400">Meet The Organizers</h1>
        <h2 className="text-heading-lg text-neutral-100">Our Team</h2>
        <p className="text-body-sm text-neutral-100 mb-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque
          tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse
          potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam,
          eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl mb-2xl">
        <HeadshotCard
          role="Co-Chair"
          name="Jennifer Huang"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Co-Chair"
          name="Sydney Komanac"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
        <HeadshotCard
          role="Finance & Sponsorship"
          name="Mara"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Finance & Sponsorship"
          name="An"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Finance & Sponsorship"
          name="Tina"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
        <HeadshotCard
          role="Operations & Logistics"
          name="Serena"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Operations & Logistics"
          name="Meyer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Operations & Logistics"
          name="Laraib"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
        <HeadshotCard
          role="Recruitment"
          name="Felicia"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Recruitment"
          name="Chhaya"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Recruitment"
          name="Julia"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
        <HeadshotCard
          role="Visual Design & Marketing"
          name="Bianca"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Visual Design & Marketing"
          name="Emily"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
        <HeadshotCard
          role="Visual Design & Marketing"
          name="Audrey"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, hendrerit ut eleifend nec, aliquet sed nibh. Suspendisse potenti. Nulla eu libero quam. Pellentesque faucibus ultricies quam, eget cursus velit porta sit amet. Aenean sollicitudin lacus mauris."
        ></HeadshotCard>
      </div>
    </div>
  );
}
