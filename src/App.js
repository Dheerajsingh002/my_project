import Functionalcomponents from './Functionalcomponents';
import FunctionalComponent from './components/FunctionalComponent';
import Setstates from './Setstates';
import './App.css';
import {ClassComponent, ClassComponent1} from './components/ClasasComponent';
const pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29BZxdOgdxqh69fFahk0jn6AZGtH-0yenyQ&usqp=CAU';
const or=[
  <li>Home</li>,
  <li>About</li>,
  <li>Contects</li>,
  <li>Phonne</li>
];

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <img src={pic} alt="" />
     <ul>
      {or}
     </ul>
     <FunctionalComponent/>
     <ClassComponent/>
     <ClassComponent1/>

     <div className="in">
     <Functionalcomponents
     title="Developers" content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."/>
      <Functionalcomponents
     title="Websites" content="Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper."/>
      <Functionalcomponents
     title="Websiteees" content="There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:

     Narration: Tell a story. Go chronologically, from start to finish. (See an example.)
     Description: Provide specific details about what something looks, smells, tastes, sounds, or feels like. Organize spatially, in order of appearance, or by topic. (See an example.)
     Process: Explain how something works, step by step. Perhaps follow a sequence—first, second, third. (See an example.)
     Classification: Separate into groups or explain the various parts of a topic. (See an example.)
     Illustration: Give examples and explain how those examples support your point. (See an example in the 5-step process below.)"/>
     

     </div>
     <Setstates/>
   
    </div>
  );
}

export default App;













