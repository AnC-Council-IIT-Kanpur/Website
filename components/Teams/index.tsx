"use client";
import React from "react";
import SingleTeam from "./SingleTeams";
import SectionHeader from "../Common/SectionHeader";
import { TeamSection } from "@/types/team";
import TeamSectionView from "./TeamSectionView";

const Team = ({teamSectionData}: {teamSectionData: TeamSection}) => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="teams" className="py-10 lg:py-15 xl:py-15">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <TeamSectionView
            headerInfo={{
              title: teamSectionData.title,
              subtitle: teamSectionData.subtitle,
              description: teamSectionData.description,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="flex flex-wrap justify-center gap-10">
            {/* <!-- Features item Start --> */}

            {teamSectionData.teams.map((team, key) => (
              <SingleTeam team={team} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Team;