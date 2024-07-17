import { Stack } from "@mui/system";
import React, { Component } from "react";
import Footer from "../Footer/footer";
import Form from "./form";
import Header from "../Header/header";


class Event extends Component {
  render() {
    return (
      <Stack
            sx={{ margin: { lg: 3, xs: 2 }, color: "#F2F3F4" }}
            direction="column"
            spacing={{ lg: 12, xs: 10 }}
          >
            <Header />
            <Form />
            <Footer />
          </Stack>
    );
  };
}

export default Event;

// const Event = () => {
//   return (
//     <Stack
//       sx={{ margin: { lg: 3, xs: 2 }, color: "#F2F3F4" }}
//       direction="column"
//       spacing={{ lg: 12, xs: 10 }}
//     >
//       <Header />
//       <Form />
//       <Footer />
//     </Stack>
//   );
// };

// export default Event;
