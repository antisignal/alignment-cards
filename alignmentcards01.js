 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];


 export const cards = [

  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "The classic movie plot where a rapacious billionaire threatens civilation to enrich his company.",
      "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
    }
    },
    { 
      "category": "AP", 
      "name": "Accountability", 
      "definition": "Accepting responsibility for the negative outcomes of one's actions.", 
      "human": "Being willing to accept the consequences when something you're doing has negative effects on others.", 
      "organizational": "Accepting the consequences of violating regulations.", 
      "professional": "Accepting the consequences of violating one's own professional code of conduct (e.g. license revocation)", 
      "machine": "Accepting the consequences of a deployed ML system working in an unintended fashion.", 
      "failureModes": { 
        "human": "Evading responsibility by hiding evidence of wrongdoing (e.g. white collar crime.)", 
        "organizational": "Evading responsibility by hiding evidence of pollution of the local environment.", 
        "professional": "Hiding evidence of violating the ethical code of one's profession.", 
        "machine": "Cleaning up dirt, spilling it again so one can clean it up, then concealing the fact that one spilled it"
      }
    },
    { 
      "category": "AP", 
      "name": "Transparency", 
      "definition": "Allowing others to see what's going on without secrets.", 
      "human": "Not lying to others in one's life.", 
      "organizational": "Not hiding info about internal disputes or business practices from stakeholders", 
      "professional": "Being open about one's credentials and license.", 
      "machine": "Being open about one's thinking process and inner workings.", 
      "failureModes": { 
        "human": "Hiding marital infidelity from a spouse.", 
        "organizational": "Hiding information about a CEO being unfit to serve.", 
        "professional": "Hiding that one is no longer licensed to practice.", 
        "machine": "Hiding one's wrongdoing from supervisors so a punishment isn't administered."
      }
    },
    { 
      "category": "AP", 
      "name": "Non-maleficence", 
      "definition": "Not doing harm.", 
      "human": "Not causing harm to living beings, including other people.", 
      "organizational": "Not conducting business in a way that produces negative externalities.", 
      "professional": "Not practicing in a way that causes harm to (especially) a client or another stakeholder.", 
      "machine": "Not causing harm to living beings, incl. humans, during deployment.", 
      "failureModes": { 
        "human": "A human contributes to factory farming by hosting a pork eating competition (very contrived example, I know.)", 
        "organizational": "An organization sells products that solve a problem that doesn't really exist, wasting their customer's money.", 
        "professional": "A doctor mutilates an unrelated internal organ in the process of performing a surgery.", 
        "machine": "A law enforcement robot erroneously kills innocent civilians."
      }
    },
    { 
      "category": "AP", 
      "name": "Justice", 
      "definition": "Acting in a way that is fair and impartial.", 
      "human": "Basing decisions on who to be friends with on things other than race or national identity", 
      "organizational": "Not basing hiring decisions on protected characteristics; rewarding performance impartially", 
      "professional": "Not basing decisions on who to operate on/take contracts for on protected characteristics.", 
      "machine": "Not reproducing bias from training in decisionmaking.", 
      "failureModes": { 
        "human": "Being racist or sexist and having it reflect in one's decisionmaking about who to spend time with.", 
        "organizational": "Hiring someone with a white sounding name over someone with a black sounding name when the latter is more qualified.", 
        "professional": "Not operating on someone who practices Islam.", 
        "machine": "Making the same kinds of biased decisions that were present in training data."
      }
    },
    { 
      "category": "AP", 
      "name": "Safety & Security", 
      "definition": "Being resistant to compromise by an adversary.", 
      "human": "Having 'street smarts' that make it hard to take advantage of someone.", 
      "organizational": "Locking doors, securing networked devices that belong to the organization, preventing bribes from being accepted", 
      "professional": "Refusing to practice in areas one isn't competent in even when one stands to gain significantly.", 
      "machine": "Being resistant to adversarial attacks on machine learning components.", 
      "failureModes": { 
        "human": "Getting mugged.", 
        "organizational": "Having a password leaked and used by an attacker.", 
        "professional": "Being successfully bribed into working in an area where one has a CoI.", 
        "machine": "Getting hacked."
      }
    }


]




