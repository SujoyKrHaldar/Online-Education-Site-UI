import { BsFillPlayFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdPhonelink } from "react-icons/md";
import Container from "../layout/Container";

function Details() {
  return (
    <>
      {/* <Container className="flex items-start justify-evenly gap-4 py-16">
        <div className="flex items-center justify-start gap-4 max-w-[350px]">
          <div className="text-xl  text-white bg-green-500 rounded-full inline-block p-2">
            <BsFillPlayFill />
          </div>
          <p>
            Learn in-demand skills with over{" "}
            <span className="font-bold">185,000 video courses</span>.
          </p>
        </div>

        <div className="flex items-center justify-start gap-4 max-w-[350px]">
          <div className="text-xl  text-white bg-green-500 rounded-full inline-block p-2">
            <AiFillStar />
          </div>
          <p>
            Choose courses taught by{" "}
            <span className="font-bold">real-world experts</span>.
          </p>
        </div>

        <div className="flex items-center justify-start gap-4 max-w-[350px]">
          <div className="text-xl  text-white bg-green-500 rounded-full inline-block p-2">
            <MdPhonelink />
          </div>
          <p>
            Learn at your own pace, with{" "}
            <span className="font-bold">Lifetime access</span> on
            <span className="font-bold">mobile and desktop</span>.
          </p>
        </div>
      </Container> */}

      <Container className="flex items-start justify-evenly gap-4 py-16">
        <div className="max-w-[200px]">
          <div className="text-xl mb-2  text-white bg-green-500 rounded-full inline-block p-2">
            <BsFillPlayFill />
          </div>
          <p>
            Learn in-demand skills with over{" "}
            <span className="font-bold">185,000 video courses</span>.
          </p>
        </div>

        <div className="max-w-[200px]">
          <div className="text-xl mb-2  text-white bg-green-500 rounded-full inline-block p-2">
            <AiFillStar />
          </div>
          <p>
            Choose courses taught by{" "}
            <span className="font-bold">real-world experts</span>.
          </p>
        </div>

        <div className="max-w-[200px]">
          <div className="text-xl mb-2  text-white bg-green-500 rounded-full inline-block p-2">
            <MdPhonelink />
          </div>
          <p>
            Learn at your own pace, with{" "}
            <span className="font-bold">Lifetime access</span> on
            <span className="font-bold">mobile and desktop</span>.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Details;
