// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: "I am task oriented in order to achieve certain goals.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Brown,D",
        content: "Yep"
      },
      {
        type: "  ",
        content: "Don't know"
      },
      {
        type: "JP,Brown,D,No",
        content: "Nah"
      }
    ]
  },
  // question #2
  {
    question: "I get bored easily when disscussing abstract concepts.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #3
  {
    question: "I like to try things out myself.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #4
  {
    question: "I like to know where I'm going before I leave the house.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Brown,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #5
  {
    question: "I believe there is a logical explanation for everything.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Brown,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #6
  {
    question: "I tend to keep my social circle small.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #7
  {
    question: "I like to share my ideas with others.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #8
  {
    question: "I enjoy using social media.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #9
  {
    question: "I always express concern for others when making decisions.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #10
  {
    question: "I like to try new things.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #11
  {
    question: "I can easily adjust to a change in decision.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #12
  {
    question: "I solve problems by working through facts until I understand the problem.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Brown,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #13
  {
    question: "I rely on logic rather than intuition when making a decision.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #14
  {
    question: "I make decisions with my heart.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #15
  {
    question: "I learn best by seeing step by step instructions.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Brown,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #16
  {
    question: "I sometimes move onto another task before completing my current one.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #17
  {
    question: "I prefer a flexible and spontaneous way of life.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #18
  {
    question: "I like to keep my options open when making decisions.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Green,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #19
  {
    question: "I feel comfortable in crowds.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #20
  {
    question: "I like to share my feelings with others.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #21
  {
    question: "I prefer to work/do right away rather than spend time making a plan.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Brown,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #22
  {
    question: "I know my priorities.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Brown,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #23
  {
    question: "I tend to work alone.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Green,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #24
  {
    question: "I don't like going to parties.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #25
  {
    question: "I am in tune with my own emotions and let them guide me in life.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #26
  {
    question: "I rely on my intution and experience more than facts.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #27
  {
    question: "I like to think things through.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Green,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #28
  {
    question: "I am a visual learner.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #29
  {
    question: "I think carefully before I make decisions.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Brown,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #30
  {
    question: "I feel uneasy if my actions disrupt harmony in my social circle.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #31
  {
    question: "I put my personal opinions aside in pursuit of fairness and justice.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Brown,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #32
  {
    question: "I tend to sit at the back or corner of the room.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #33
  {
    question: "I like being the centre of attention.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Red,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #34
  {
    question: "I solve problems by leaping between different ideas and possibilities.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #35
  {
    question: "I like to complete my work before playing.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Red,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #36
  {
    question: "I don't let other people influence my thoughts or actions.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Red,A",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #37
  {
    question: "I use my sense of smell to help remember memories.",
    answers: [
      {
        // briggs, color, letter
        type: "SN,Blue,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #38
  {
    question: "I make decisions based on my emotions.",
    answers: [
      {
        // briggs, color, letter
        type: "TF,Blue,B",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #39
  {
    question: "I need time alone to recharge.",
    answers: [
      {
        // briggs, color, letter
        type: "EI,Green,C",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
  // question #40
  {
    question: "I like to keep my room organized and clean.",
    answers: [
      {
        // briggs, color, letter
        type: "JP,Brown,D",
        content: "Yep"
      },
      {
        type: " ",
        content: "Nah"
      }
    ]
  },
];

export default quizQuestions;