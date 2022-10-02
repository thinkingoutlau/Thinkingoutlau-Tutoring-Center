// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// //client Id and client secret
// const oAuth2Client = new OAuth2(
//   "907918027440-6p0lr78uqikctt51ph9744oth9irlbm4.apps.googleusercontent.com",
//   "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"
// );

// oAuth2Client.setCredentials({
//   refersh_token:
//     "1//04IKPwZSP-Ov1CgYIARAAGAQSNwF-L9IrLw_SQJqWBkEknbwOHuf8ga89dYmf_3JTY8Ucr4pf0C3rV2r0P-yVmS40zoGsfDV3eA0"
// });

// const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

// //declare start and end time for our calendar
// //sets the initial date to tomorrow
// const eventStartTime = new Date();
// eventStartTime.setDate(eventStartTime.getDay() + 2);

// //event ends on the same day and will be 45 mins long
// const eventEndTime = new Date();
// eventEndTime.setDate(eventEndTime.getDay() + 2);
// eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

// const event = {
//   summary: "Meet with Rosemary",
//   location: "Zoom Link",
//   description: "Meeting with Rosemary to go over SAT questions.",
//   start: {
//     dateTime: eventStartTime,
//     timeZone: "America/NewYork"
//   },
//   end: {
//     dateTime: eventEndTime,
//     timeZone: "America/NewYork"
//   },
//   colorId: 1 //there are 11 diff color ids (color for event)
// };

// //send query to calendar to see if there is an event during that time
// //if you do not want an event overlap, code below:

// calendar.freebusy.query(
//   {
//     resource: {
//       timeMin: eventStartTime,
//       timeMax: eventEndTime,
//       timeZone: "America/NewYork",
//       items: [{ id: "primary" }]
//     }
//   },
//   (error, res) => {
//     if (error) return console.error("Free Busy Query Error: ", error);

//     const eventsArr = res.data.calendars.primary.busy;

//     if (eventsArr.length === 0)
//       return calendar.events.insert(
//         { calendariId: "primary", resource: event },
//         error => {
//           if (error)
//             return console.error("Calendar Event Creation Error:", error);
//           return console.log("Calendar Event Created.");
//         }
//       );

//     return console.log("Sorry I am busy.");
//   }
// );
