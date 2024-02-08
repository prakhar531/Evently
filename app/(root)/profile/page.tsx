import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      {/* My tickets  */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My tickets</h3>
          <Button asChild className="button hidden sm:flex">
            <Link href="/#events">Explore more Events</Link>
          </Button>
        </div>
      </section>

      {/* event organized */}

      <section className="bg-primary-50 bg-dotted-pattern bg-cover py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Event Organized</h3>
          <Button asChild className="button hidden sm:flex">
            <Link href="/#events">Create New Event</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
