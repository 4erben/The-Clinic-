const data1 = [{
    name:"Jan",
    Consultation:21,
    Catracts:50,
    "LASIK Surgery": 41,
    "Glaucoma": 30
  },{
    name:"Feb",
    Consultation:25,
    Catracts:60,
    "LASIK Surgery": 51,
    "Glaucoma": 34
  },{
    name:"March",
    Consultation:31,
    Catracts:65,
    "LASIK Surgery": 31,
    "Glaucoma": 53
  },{
    name:"April",
    Consultation:35,
    Catracts:70,
    "LASIK Surgery": 41,
    "Glaucoma": 45
  },{
    name:"May",
    Consultation:41,
    Catracts:80,
    "LASIK Surgery": 45,
    "Glaucoma": 25
  }];
  const data2 = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 200 },
    { name: 'Category D', value: 100 },
  ];
  const patientData = [
    { month: 'January', value: 100 },
    { month: 'February', value: 150 },
    { month: 'March', value: 200 },
    { month: 'April', value: 180 },
    { month: 'May', value: 220 },
    { month: 'June', value: 250 },
    { month: 'July', value: 280 },
    { month: 'August', value: 300 },
    { month: 'September', value: 270 },
    { month: 'October', value: 220 },
    { month: 'November', value: 180 },
    { month: 'December', value: 150 },
  ];
  const ageWiseData =[
    { name: 'A1', value: 100 },
    { name: 'A2', value: 150 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
  ];
  const appointments = [
    {
      no:1,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:2,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:3,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:4,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:5,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:6,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:7,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:8,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:9,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:10,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:11,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:12,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:13,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:14,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:15,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:16,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:17,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:18,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:19,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:20,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2023",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:21,
      name:"ABC",
      mobile: "1******0*",
      date:"24 March,2025",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    },
    {
      no:22,
      name:"ABC",
      mobile: "1******0*",
      date:"30 April,2024",
      time:"12:00PM",
      action:"upcoming",
      email:"abc@gmail.com"
    }
  ];
  const colors = ["#8884d8","#0084d8","#8800d8","#888400","#888422","#858400","#508400"];
  const weekDays = [];
   // Get today's date
  const today = new Date();

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = today.getDay();
  const dayOfMonth = today.getDate();
  // Calculate the date of the first day of the current week (Sunday)
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - dayOfWeek);


// Loop through the days of the week (0 to 6) and add each date to the array
for (let i = 0; i < 7; i++) {
  const day = new Date(firstDayOfWeek);
  day.setDate(firstDayOfWeek.getDate() + i);
  weekDays.push(day.toDateString());
}
  export {data1,data2,patientData,ageWiseData,appointments,colors,weekDays,today,dayOfMonth};