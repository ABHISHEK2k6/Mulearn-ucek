import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        <div className={styles.teamBgLineWrapper}>
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
          <img src={line} alt="" loading="lazy" />
          <img src={line2} alt="" loading="lazy" />
          <img src={line} alt="" loading="lazy" />
        </div>
        <div className={styles.teamMembersDetailsWrapper}>
          <div className={`${styles.team} ${styles.team1}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.campusLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.campusLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team2}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.campusCoLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.campusCoLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Campus Co-Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.igLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.igLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                IG Manager
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.operationLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.operationLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Operation Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team5}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.technicalLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.technicalLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Technical Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team6}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.mediaLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.mediaLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Creative Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team7}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.marketingLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.marketingLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>
                Marketing Lead
              </div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team8}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.communityLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.communityLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Community Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team9}`}>
            <div className={styles.team1Img}>
              <img
                className={styles.teamImageIndividual}
                src={data.team.contentLead.image}
                loading="lazy"
              />
            </div>
            <div className={styles.teamNameDesignation}>
              <div className={styles.teamMemberName}>
                {data.team.contentLead.name}
              </div>
              <div className={styles.teamMemberDesignation}>Content Lead</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
