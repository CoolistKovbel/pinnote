import Link from "next/link";
import {
  FaGitSquare,
  FaYoutube,
  FaTwitterSquare,
  FaLink,
} from "react-icons/fa";

const Page = () => {
  return (
    <main className="min-h-screen w-full bg-[#111]">

      <header className="w-full p-4 bg-[#333] h-[100px] text-center">
        <h2 className="font-bold text-4xl">About PinNote</h2>
      </header>


      <div className="items-center justify-center flex flex-col w-full h-full">

        <section className="p-10 flex flex-col gap-10 text-xl leading-7 ">
          <p>
            <strong>PinNote</strong> is a application that allows you to be able
            to sign up and create an account with us to be able to earn rewards
            and join groups that will challange you to work together and be able
            to handle certain pin request that will be gernerated by clients and
            other users.
          </p>

          <p>
            Your job will be to handle these <em>pins</em> with your group
            memebers and complete the project by submitting a github repo link as
            well as making sure that it is up and running on a test server. From
            there you will be able to receive reward based on completion and will
            be distrubuted amoung you and your team memebers.
          </p>

          <p>
            You will be able to join, leave, or create a group of 5 people.{" "}
            <strong>Only</strong> a group of 5 will be able to accept pins while.
            You will be receiving rewards based in our native token, the EoirBall
            Token, you can find it on{" "}
            <Link
              href="https://etherscan.io/token/0x3336debc102ce50a707cf8df8c626ab338d55539"
              target="_blank"
            >
              etherscan
            </Link>{" "}
            for more details. You will be able to use this token to stake to earn
            more, or swap with eth or other token pairs that may be created by
            users or the offical pinnote chief.
          </p>

          <p>
            For those who want to be a little more connected with out application
            we welcome you to mint your very own signature ERC-721 token where you
            will then be able to earn a little more rewards as well as manage and
            maintain certain groups. You will be able to trade your token with
            others as well as you may be revoked some privallages if you are
            reported abusing.
          </p>

          <p>
            We welcome all and want to be able to create a well rounded community
            of developers and designers to be able to build and cooperated as a
            team building real world applications and not being discouraged if
            times get hard. We hope you get along with everyone in this
            decentralized community and remeber to keep a positive mindset to
            allow creative flow to enter our community.
          </p>

          <p>
            Be sure to stay up to date with the any latest updates that we will
            provide as well as follow our social where we give shoutouts to groups
            that completed pins as a team.
          </p>
        </section>

        {/* Social? */}

        <div className="w-[30%] drop-shadow-lg mx-auto rounded p-3 bg-[#444] flex items-center justify-between h-[200px] pb-4 ">
          <Link
            href="http://www.twitter.com"
            target="_blank"
            className="bg-[#100] p-4 hover:bg-[#000] text-2xl font-bold drop-shadow-lg rounded text-center"
          >
            <FaTwitterSquare className="mx-auto text-4xl" /> <br /> Twitter
          </Link>
          <Link
            href="http://www.twitter.com"
            target="_blank"
            className="bg-[#100] p-4 hover:bg-[#000] text-2xl font-bold drop-shadow-lg rounded text-center"
          >
            <FaLink className="mx-auto text-4xl" /> <br /> LinkedIn
          </Link>
          <Link
            href="http://www.twitter.com"
            target="_blank"
            className="bg-[#100] p-4 hover:bg-[#000] text-2xl font-bold drop-shadow-lg rounded text-center"
          >
            <FaYoutube className="mx-auto text-4xl" />  <br />Youtube
          </Link>
          <Link
            href="http://www.twitter.com"
            target="_blank"
            className="bg-[#100] p-4 hover:bg-[#000] text-2xl font-bold drop-shadow-lg rounded text-center"
          >
            <FaGitSquare className="mx-auto text-4xl" /> <br />
            Github
          </Link>
        </div>
      </div>


    </main>
  );
};

export default Page;
