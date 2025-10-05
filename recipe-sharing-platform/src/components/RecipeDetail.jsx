import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center py-8">Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              {recipe.summary}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Instructions
                </h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;