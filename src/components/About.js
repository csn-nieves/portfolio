import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 100, completed: 100, bgcolor: "#000" },
    { language: "Spanish", progress: 70, completed: 60, bgcolor: "#000" },
  ];

  const progressBarData = [
    { bgcolor: "#7d7789", completed: 100, title: "HTML & CSS" },
    { bgcolor: "#7d7789", completed: 100, title: "Javascript" },
    { bgcolor: "#7d7789", completed: 100, title: "TypeScript" },
    { bgcolor: "#7d7789", completed: 100, title: "Go" },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]">
                  Hello there! My name is <strong>Christopher Nieves.</strong> I
                  am a software engineer, and I&apos;m very passionate and dedicated
                  to my work, bringing to life intriguing and ambitious
                  applications.
                </p>
                <p>
                  My work includes web applications and projects built with React,
                  TypeScript, and other tools. You can explore a selection in
                  the Projects section.
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">
                      Christopher Nieves
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Education:
                    </span>
                    <span className="second inline-block">
                      SUNY Potsdam & Fullstack Academy
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="mailto:csn.nieves@gmail.com"
                      >
                        csn.nieves@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left mb-[8px]">
                    <span className="first inline-block min-w-[100px] font-bold">
                      LinkedIn:
                    </span>
                    <span className="second inline-block">
                      <a
                        href="https://www.linkedin.com/in/christophernieves20"
                        target="_blank" rel="noopener noreferrer"
                      >
                        christophernieves20
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      GitHub:
                    </span>
                    <span className="second inline-block">
                      <a href="https://github.com/csn-nieves" target="_blank" rel="noopener noreferrer">
                        csn-nieves
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    My Work
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Software Development
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Web Development
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service_list w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Interests
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Soccer
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Running
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Rock Climbing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skills w-full h-auto clear-both float-left mb-[65px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="programming w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Programming
                  </span>
                </div>
                <div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
                  {progressBarData.map((item, idx) => (
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
              <div className="language w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Language
                  </span>
                </div>
                <div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
                  {circleProgressData.map((item, idx) => (
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.language}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="resume w-full h-auto clear-both float-left mb-[75px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="education w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Education
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2008-2013
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              SUNY Potsdam
                            </h3>
                            <span className="text-[14px]">
                              Physics - Chemistry
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2021
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Fullstack Academy
                            </h3>
                            {/* <span className="text-[14px]">Bachelor Degree</span> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="experience w-1/2">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Experience
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2022 - current
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Web Development Contractor
                            </h3>
                            {/* <span className="text-[14px]">Football Player</span> */}
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2021 - current
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Fullstack Academy
                            </h3>
                            <span className="text-[14px]">Teaching Mentor</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
