import SectionContainer from "../layout/SectionContainer";
const Contact = () => {
  return (
    <SectionContainer navName="contact">
      <div className="section_inner">
        <div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
              Get in Touch
            </span>
          </div>
          <div className="short_info w-full h-auto clear-both float-left mt-[62px]">
            <ul className="ml-[-30px] flex flex-wrap">
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/location.svg"
                    alt="image"
                  />
                  <span className="block">Saratoga, NY</span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/mail.svg"
                    alt="image"
                  />
                  <span className="block">
                    <a
                      className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                      href="#"
                    >
                      nievescs20@gmail.com
                    </a>
                  </span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/linkedin.svg"
                    alt="image"
                  />
                  <span className="block">
                    <a
                      href="https://www.linkedin.com/in/christophernieves20"
                      target="_blank"
                    >
                      christophernieves20
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="form w-full h-auto clear-both flex">
            <div className="w-full">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left border border-solid border-gray-500">
                        <input
                          id="name"
                          type="text"
                          placeholder="Name"
                          autoComplete="off"
                          // className="border border-solid border-red-500"
                        />
                      </li>
                      <li className="w-full mb-[30px] float-left border border-solid border-gray-500">
                        <input
                          id="email"
                          type="text"
                          placeholder="Email"
                          autoComplete="off"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                      style={{ border: "1px solid gray" }}
                    />
                  </div>
                  <div className="cavani_tm_button">
                    <a id="send_message" href="#">
                      Send Message
                    </a>
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
            {/* <div className="right w-1/2 pl-[15px] relative">
              <div className="map_wrap">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <div className="grayscale">
                      <iframe
                        width="100%"
                        height={355}
                        id="gmap_canvas"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20888.947395697403!2d-73.78438574224575!3d43.08348069958746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1697228759050!5m2!1sen!2sus"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                      />
                    </div>
                    <br />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
                      }}
                    />
                    <a href="https://www.embedgooglemap.net">
                      embedgooglemap.net
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
                      }}
                    />
                  </div>
                </div>
                {/* Get your API here https://www.embedgooglemap.net */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
