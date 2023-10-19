
import { useState } from "react";


// Que'elle est la bonne réponse ?

// Récupérer la valeur des inputs soumit par l'utilisateur

// Vérifier si la valeur est fausse ou vrai par rapport à la solution

// Afficher le résultat, avec si possible, en cas de mauvaise réponse, montrer la bonne solution

const App = () => {

  // Lorsque l'utilisateur sélectionne un input, il faut changer la valeur de formData pour la question concernée

  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  })

  // Ici, l'utilisateur soumet le formulaire, vous devez vérifier formData, créer un variable avec les bonnes réponses et les comparées avec formData

  const handleSubmitQuizz = (e) => {
    e.preventDefault()

  }

  
  return (
    <>
      <h1 className="text-3xl">Quizz culturelle</h1>
      <div className="">
        <form className="shadow flex flex-col p-5 gap-5 mt-5">

          <div id="question1">
            <h2>Quelle est la capitale de l'Australie ?</h2>
            <div className="flex items-center">
              <input type="radio" name="question1" />
              <p>Réponse 1</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question1" />
              <p>Réponse 2</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question1" />
              <p>Réponse 3</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question1" />
              <p>Réponse 4</p>
            </div>
          </div>

          <div id="question2">
            <h2>Quel est l'élément chimique dont le symbole est "O" ?</h2>
            <div className="flex items-center">
              <input type="radio" name="question2" />
              <p>Réponse 1</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question2" />
              <p>Réponse 2</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question2" />
              <p>Réponse 3</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question2" />
              <p>Réponse 4</p>
            </div>
          </div>

          <div id="question3">
            <h2>Qui a écrit "Les Misérables" ?</h2>
            <div className="flex items-center">
              <input type="radio" name="question3" />
              <p>Réponse 1</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question3" />
              <p>Réponse 2</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question3" />
              <p>Réponse 3</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question3" />
              <p>Réponse 4</p>
            </div>
          </div>

          <div id="question4">
            <h2>Quel est le plus long fleuve du monde ?</h2>
            <div className="flex items-center">
              <input type="radio" name="question4" />
              <p>Réponse 1</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question4" />
              <p>Réponse 2</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question4" />
              <p>Réponse 3</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="question4" />
              <p>Réponse 4</p>
            </div>
          </div>

        </form>

        <button className="py-2 px-4 bg-green-600 mt-5">Vérifier</button>

      </div>
    </>
  );
}

export default App