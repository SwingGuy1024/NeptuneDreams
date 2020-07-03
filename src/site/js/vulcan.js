function leadText() {
  return filter("  <h1>Vulcan's Level</h1>\n" +
      '  <p class="lead">\n' +
      "  Vulcan, Roman god of the forge, the only god who worked, was known for the beautiful things he crafted in his foundry. Vulcan used only\n" +
      "  the best tools. This carpenter's level is the level that Vulcan would have used. If he existed. And if he had a smart phone.</p>\n" +
      "<p>\n" +
      "  Okay, maybe a Roman god wouldn't have used a level app on a smart phone. Maybe he could just put his hands on a surface and feel even the\n" +
      "  smallest tilt. I mean, he was a god, right? So what makes this level app so useful that it bears the name of a Roman god?\n" +
      "</p><p>\n" +
      "  It uses a unique calibration process that doesn't require a level surface.\n" +
      "</p><p>\n" +
      "  Yeah, there are a lot of carpenter's level apps out there. And while most smart phones have a gravity sensor, most of them aren't\n" +
      "  installed with precision, so most of these apps aren't very accurate unless you can calibrate them. A lot of smart-phone levels have a\n" +
      "  <q>Calibrate</q> button, but you first need to put your device on a surface that you already know is level. And to know that, you need a\n" +
      "  carpenter's level that's already calibrated!\n" +
      "</p><p>\n" +
      "  So how useful is that? Well, not very. So your level's calibration button probably doesn't do you much good.\n" +
      "</p><p>\n" +
      "  Here's where Vulcan's Level beats all the other smart-phone levels: It uses a unique two-stage calibration process. By measuring a surface\n" +
      "  from two different orientations, it can compensate for a tilted surface. So it can give you a true calibration, even from a surface that's\n" +
      "  not truly level. Kind of like putting your hands on a surface and just feeling even the smallest tilt. How does that work? Well, download\n" +
      "  the app and try it yourself.\n" +
      "</p>\n");
}

function filter(input) {

  // Undocumented behavior. The docs say it replaces every instance, but it only replaces the first one if finds!
  while (input.indexOf("'") >= 0) {
    input = input.replace("'", '&rsquo;');
  }
  return input;
}

function FAQs() {
  const faqs = [
    {
      question: "How can it calibrate itself without a level surface?",
      answer: "The two-stage calibration process measures the direction of gravity in two different positions. Each has its own error, but the two errors cancel each other out, giving you a true reading of the direction of gravity."
    },
    {
      question: "Why do I need to calibrate it separately for each axis?",
      answer: "The calibration process does a good job of finding the error in two directions, but not in all three directions. If you never rotate to a different axis, then you only need two directions calibrated. But when you rotate the level to work on another axis, you'll need that third axis to get calibrated properly."
    },
    {
      question: "What does <q>calibrate</q> mean, anyway?",
      answer: "To calibrate a measurement tool is to adjust it so that it accurately measures what it's supposed to measure. Many simple measurement tools never need calibration, like rulers and thermometers. Others, like volt meters, need to be calibrated every few weeks to ensure accuracy."
    },
    {
      question: "What do you mean by Axis?",
      answer: "An axis is a line that something can rotate around, the way a wheel rotates around the axle. A mobile device actually has three gravity sensors, one for each dimension. One measures gravity along the X axis, which goes from left to right. Another measures the Y axis, which goes from top to bottom. The last one measures along the Z axis, which is a vertical line when your phone is resting on a level surface. "
    },
    {
      question: "How can I tell if my level needs calibration?",
      answer: "Place your level on any firm surface and look at the reading. Then turn it around 180¡ and put it back in the same spot. If your level is well calibrated, it should give you the same reading as before. This works with anybody's level."
    },
    {
      question: "How accurate is the Level of Vulcan?",
      answer: "Carpenter's levels have different accuracies, depending on how much money you're willing to spend. A cheap level will measure one part in 500. A more expensive one will do one part in 2000. Level of Vulcan lets you choose, but its setting doesn't affect the accuracy of the internal sensor. Instead, it changes the size of the central circle. Of course, some devices will use a better gravity sensor than others, so yours might not work well at a higher accuracy. You'll have to experiment with it to see."
    },
    {
      question: "What is the padlock for?",
      answer: "The level will switch to different views depending on how you orient it. There's one view for each axis. But if you want to use just one view, you can hit the lock button to lock the current view in place. "
    },
    {
      question: "Why blue? Most levels use a bright yellow liquid.",
      answer: "A physical level uses a fluorescent yellow fluid so you can read it easily even in very dim light. Since a mobile phone gives off its own light, it doesn't need to be yellow. You can adjust the color to any one you want."
    },
    {
      question: "I work on roofs. Can I see the roof pitch in roofer's units.",
      answer: "Yes. You can show the angles as degrees, or per cents, or inches of rise per foot of run."
    },
    {
      question: "Does it work on a tablet, too?",
      answer: "Certainly. In fact, it probably works better on a tablet. The longer the reach of the device, the more accurate the reading. That's why a good carpenter's level is very long."
    }
  ];
  var output = "";
  for (var i = 0; i < faqs.length; ++i) {
    let faq = faqs[i];
    console.log(faq);
    // output += "<h3>" + (faq.question) + '</h3>\n<p class="answer">' + (faq.answer) + '</p>\n';
    output += '<tr><td class="faq question">' + filter(faq.question) + '<td class="faq"><p>' + filter(faq.answer) + '</p></td></tr>\n';
  }
  console.log(output);
  return output;
}
