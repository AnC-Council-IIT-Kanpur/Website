import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleRTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content, intern} = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark ">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{intern}</p>
          <p>{designation}</p>
        </div >
        <div className="relative">
        <Image className="rounded-full w-[50px] h-[50px] object-cover" src={image} alt={name} />
        </div>
        
      </div>
      <p className="overflow-hidden">{content}</p>
    </div>
  );
};

export default SingleRTestimonial;
