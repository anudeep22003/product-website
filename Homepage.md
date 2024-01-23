Building human feedback infrastructure for LLMs
Bringing Reinfocrcement Learning to LLMS

Reinforcmeent Learning With Human Feedback, colloqially referred to as RLHF, is a machine learning technique to align large langauge models to human preference. 

RLHF involves training a reward model to output a high number when the output is something that human likes, and low otherwise. 

This involves getting humans to indicate their preference between outputs, and using this as labeled data to train a reward model. The reward model is optimized to generate a high score for an output that will be prefered by humans, and low otherwise. A good reward model will generalize to predicting a human's preference for outputs it has not seen too. 

Core to RLHF is a reward model that is trained on human preference data. An optimal reward model will give a high score to an output that humans will prefer, and a low score otherwise. 

The Instruction tuned pretrained LLM, is then finetuned to generate outputs that maximize the reward. In this way, an LLM is tamed to restrict it's action space to output generations that humans find useful. 

However 

....................................

# Empower businesses and individuals to build and maintain their own reward models. 

## Reward models enable reinforcement learning with human feedback in Large Language Models. 

However, constructing a reward model is challenging. The two major classes of problems are: 
- Coordinating preference data over a sufficiently large human group, and resolving preference ambiguities. 
- Using the reward model to train the LLM is a sensitive process and prone to reward-hacking and other perturbations. 

There are advantages to reward models that outweigh the challenges:
- You own your reward model, it is your IP 
- Reward models are portable, you can reuse the same reward model even if you switch LLM backends
- Reward models are an order of magnitude smaller in size, and thus can be stored and run from your phone

## We beleive the future of AI is in decentralized reward models. 

## Our mission is to build tools that enable RLHF at scale. 

## Our vision is to align Artificial Intelligence to humans. 
....................................

We want to build the foundational layer that allows organizations to train their reward models, own their IP and 
