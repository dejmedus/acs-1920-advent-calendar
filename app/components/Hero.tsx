import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [promoTime, setPromoTime] = useState(60);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoTime(promoTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [promoTime]);

  useEffect(() => {
    setPromoTime(60);
  }, [isModalOpen]);

  return (
    <div className="hero">
      <div className="mb-20 text-center text-white hero-content">
        <div className="max-w-md">
          <h2 className="font-bold text-4xl">
            Create & Share Magical E-Advent Calendars with Loved Ones
          </h2>
          <h3 className="py-6 text-xl">
            Bring holiday joy with personalized, interactive e-advent calendars.
          </h3>

          <label
            className="bg-red-900 border-none text-neutral-200 hover:text-black btn"
            htmlFor="my_modal_7"
          >
            <button
              className="hidden"
              onClick={() => setIsModalOpen(!isModalOpen)}
            ></button>
            learn more
          </label>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="text-black modal" role="dialog">
            <div className="font-bold modal-box">
              <h3 className="font-bold text-xl">
                Buy one, get one free for a limited time!
              </h3>
              <h4>CODE EXPIRES IN {promoTime}s</h4>
              <p className="py-4">
                Use code{" "}
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("GIFTSHOPNOWWOWOKAY")
                  }
                  className="font-bold text-red-900 hover:underline"
                >
                  GIFTSHOPNOWWOWOKAY
                </button>{" "}
              </p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>

          <button className="ml-2 btn btn-neutral">
            <Link to="build">Create your own</Link>
          </button>
        </div>
      </div>
      <img
        src="/images/green.jpg"
        alt="Hero"
        className="w-full h-[600px] hero-image object-cover"
      />
    </div>
  );
}

export function SubPageHeader({ title }: { title: string }) {
  return (
    <div className="mb-8 pt-24 hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h2 className="font-bold text-4xl">{title}</h2>
        </div>
      </div>
    </div>
  );
}
