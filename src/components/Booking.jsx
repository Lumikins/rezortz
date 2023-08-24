import React from "react";
import { BsHeadset } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
import { destinations } from "../data";

const Booking = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-10">
      {/* left side */}
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="uppercase text-center md:text-left">
            villages de vacances tout compris pour couples
          </h2>
          <p className="text-justify py-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
            fringilla purus, rutrum pretium mi viverra non. Maecenas a porta
            leo. Donec id efficitur ex, eget feugiat ante. In sed augue vitae
            nisl sodales pulvinar. Quisque imperdiet risus quis orci
            ullamcorper, vel rutrum ante eleifend. Phasellus vitae lorem vel
            urna iaculis accumsan. Ut tincidunt facilisis pulvinar. Vivamus vel
            dui tempus, vestibulum nisi ac, lacinia urna. Quisque vel nibh
            fringilla, convallis nunc vitae, dictum nulla. Cras ultrices lorem
            vitae turpis rutrum, in laoreet ligula varius. Integer vestibulum
            eros non dictum placerat. Donec sagittis nisl et ligula venenatis
            commodo. Nunc nisi nisi, varius eget purus sed, dictum aliquet dui.
            Sed sagittis purus turpis, tristique elementum turpis fermentum id.
            Nulla sollicitudin, odio in faucibus commodo, felis felis tempor
            metus, eu sagittis libero nulla fringilla mauris. Duis dignissim
            diam eget erat fermentum, vitae fringilla arcu sodales. Vivamus ut
            magna sit amet orci sodales consectetur. Aliquam porttitor est leo,
            ac imperdiet nunc sollicitudin nec. Fusce porttitor congue felis at
            aliquam. Aliquam sollicitudin nisi ac ligula ornare, sit amet
            iaculis diam congue. Mauris laoreet, turpis eget volutpat posuere,
            nunc nibh bibendum justo, in posuere orci risus at metus. Quisque
            eros est, vestibulum sit amet odio eget, placerat elementum quam. In
            a condimentum massa. Morbi a sapien sit amet velit venenatis dictum.
            Cras vestibulum tortor eget dui dignissim, nec rutrum nisl
            tristique. Nam eleifend, dui id cursus elementum, enim dolor commodo
            quam, eu imperdiet nisl mauris nec elit. Suspendisse eget auctor
            nisl, et porta mi.{" "}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
            <button>
              <BsHeadset size={45} />
            </button>
            <div>
              <h3 className="capitalize">service de réservation</h3>
              <p className="py-1 capitalize">
                Service de réservation 24h/7j pour des vacances parfaites
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
            <button>
              <IoMdGlobe size={45} />
            </button>
            <div>
              <h3 className="capitalize">destinations autour du monde</h3>
              <p className="py-1 capitalize">
                des centaines de villages de vacances
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <div className="border-2 border-white text-center flex flex-col gap-3 p-4 mt-14">
          <p className="capitalize">
            bénéficiez d&apos;une remise de 5% sur votre commande
          </p>
          <p className="capitalize">Il ne reste plus que 16 heures</p>
          <p className="uppercase bg-gray-800 text-gray-200 py-2">
            Réservez maintenant
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col gap-2"
        >
          <div className="flex flex-col m-2 gap-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              {destinations
                .concat()
                .sort((a, b) => a.name > b.name)
                .map((destination) => (
                  <option key={destination.id}>{destination.name}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-col m-2">
            <label>Arrivée</label>
            <input type="date" className="border rounded-md p-2"></input>
          </div>
          <div className="flex flex-col m-2">
            <label>Départ</label>
            <input type="date" className="border rounded-md p-2"></input>
          </div>
          <button className="capitalize font-semibold my-6">
            vérifier la disponibilité
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
