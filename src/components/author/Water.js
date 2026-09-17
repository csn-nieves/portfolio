import React from "react";
import WaterWave from "react-water-wave";

class AuthorWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      backgroundImgs: [
        "https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zaWRlJTIwc2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateCounter(), 3000);
  }

  updateCounter() {
    const { counter, backgroundImgs, showImgs } = this.state;

    this.setState(
      {
        counter: counter + 1,
      },
      () => {
        if (counter === backgroundImgs.length - 1) {
          this.setState({
            counter: 0,
          });
        }
      }
    );
  }

  render() {
    return (
      <div className="author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15]">
        <WaterWave
          style={{
            width: `100%`,
            height: `100%`,
            position: `relative`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            // background: `url(${"https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zaWRlJTIwc2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}) no-repeat center center fixed`,
          }}
        >
          {(methods) => <></>}
        </WaterWave>
      </div>
    );
  }
}
export default AuthorWater;
