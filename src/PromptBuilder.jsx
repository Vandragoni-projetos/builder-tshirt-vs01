import React, { useState } from 'react';

const PromptBuilder = () => {
  const initialState = {
    produto: '',
    tema: '',
    designPrincipal: '',
    detalhesDesign: '',
    emocao: '',
    camadaPosterior: '',
    fundo: '',
    designPersonalizado: '',
    detalhesPersonalizados: '',
    paletaCores: '',
    coresPersonalizadas: '',
    estiloArtistico: '',
    estiloOuDetalhesPersonalizados: '',
    parametrosAdicionar: '',
    parametrosExcluir: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [promptFinal, setPromptFinal] = useState('');

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const gerarPrompt = () => {
    let prompt = '';

    if (formData.tema && formData.tema !== 'no style') {
      prompt += `${formData.tema} `;
    }

    if (formData.produto && formData.produto !== 'no style') {
      prompt += `${formData.produto} featuring `;
    }

    if (formData.detalhesDesign && formData.detalhesDesign !== 'no style') {
      prompt += `${formData.detalhesDesign} `;
    }

    if (formData.designPersonalizado) {
      prompt += `${formData.designPersonalizado}, `;
    }

    if (formData.designPrincipal && formData.designPrincipal !== 'no style') {
      prompt += `${formData.designPrincipal}, `;
    }

    if (formData.detalhesPersonalizados) {
      prompt += `${formData.detalhesPersonalizados}, `;
    }

    if (formData.emocao && formData.emocao !== 'no style') {
      prompt += `${formData.emocao} emotion, `;
    }

    if (formData.camadaPosterior && formData.camadaPosterior !== 'no style') {
      prompt += `${formData.camadaPosterior} behind the design, `;
    }

    if (formData.fundo && formData.fundo !== 'no style') {
      prompt += `isolated on ${formData.fundo} background, `;
    }

    if (formData.coresPersonalizadas) {
      prompt += `${formData.coresPersonalizadas}, `;
    }

    if (formData.paletaCores && formData.paletaCores !== 'no style') {
      prompt += `${formData.paletaCores} colors, `;
    }

    if (formData.estiloArtistico && formData.estiloArtistico !== 'no style') {
      prompt += `${formData.estiloArtistico} style, `;
    }

    if (formData.estiloOuDetalhesPersonalizados) {
      prompt += `${formData.estiloOuDetalhesPersonalizados} `;
    }

    if (formData.parametrosAdicionar && formData.parametrosAdicionar !== 'no style') {
      prompt += `${formData.parametrosAdicionar} `;
    }

    if (formData.parametrosExcluir && formData.parametrosExcluir !== 'no style') {
      prompt += `${formData.parametrosExcluir}`;
    }

    setPromptFinal(prompt.trim());
  };

  const copiarPrompt = () => {
    navigator.clipboard.writeText(promptFinal);
    alert('Prompt copiado com sucesso!');
  };

  const renderInput = (label, field) => (
    <div className="flex flex-col w-full md:w-1/2 p-2">
      <label className="font-semibold mb-1 text-gray-700">{label}</label>
      <input type="text" className="p-2 rounded border w-full" onChange={(e) => handleChange(field, e.target.value)} />
    </div>
  );

  const options = (opts) => opts.map((option, idx) => <option key={idx} value={option}>{option}</option>);

  const renderDropdown = (label, field, opts) => (
    <div className="flex flex-col w-full md:w-1/2 p-2">
      <label className="font-semibold mb-1 text-gray-700">{label}</label>
      <select className="p-2 rounded border w-full" onChange={(e) => handleChange(field, e.target.value)}>
        <option value="">Selecione</option>
        {options(opts)}
      </select>
    </div>
  );

  const optionsProduto = ['no style', 'tshirt design', 'vector tshirt design', 'logo tshirt design', 'logo', 'vector logo design', 'icon', 'vector icon', 'graphic design', 'cartoon graphic', 'clipart', 'drawing', 'svg design'];
  const optionsTema = ['no style', '2D flat', '3D', 'minimalistic', 'simple', 'vector', 'abstract', 'geometric', 'cute', 'cartoonish', 'vintage', 'retro', 'modern', 'isometric', 'photorealistic', 'romantic', 'futuristic', 'one line', 'western', 'spring', 'summer', 'autumn', 'winter', 'Christmas', 'Halloween', 'Thanksgiving', 'St Valentines', 'Easter'];
  const optionsDesignPrincipal = ['no style', 'flower', 'flowers', 'sunflower', 'trees', 'sun', 'moon', 'mountain range', 'landscape', 'national park', 'palm trees', 'sunset in the countryside', 'serene lake', 'city skylines', 'cat', 'dog', 'bird', 'fish', 'eagle', 'wolf', 'racoon', 'lion', 'fox', 'panda', 'bear', 'tiger', 'whale', 'dragon', 'paw print', 'girl', 'boy', 'woman', 'man', "woman's face", "man's face", 'baseball', 'basketball', 'American football helmet', 'American football', 'ice hockey puck', 'tennis racket', 'yoga pose', 'fishing rod and a fish', 'pile of books', 'ball of yarn', 'guitar', 'mic', 'vinyl record', 'cassette tape', 'video game controller', 'tent and campfire', 'compass', 'surfboard', 'palette and paintbrushes', 'photo camera', 'chef's cap', 'racing car', 'cup of cappuccino', 'cup of tea', 'cocktail', 'cupcake', 'avocado', 'strawberries', 'ice cream cone', 'sushi roll', 'beach', 'mountain landscape', 'country side life', 'big city', 'wildflower field', 'underwater world', 'Christmas', 'Halloween', 'mandala', 'sunglasses', 'heart symbol', 'heartbeat line', 'rocket', 'robot', 'caduceus'];
  const optionsDetalhesDesign = ['no style', 'silhouette', 'mascot', 'emblem', 'portrait', 'front view', 'full body view', 'simple', 'minimalistic', 'little', 'big', 'horizontal', 'vertical', 'urban', 'standing', 'sitting', 'running', 'reading', 'smiling', 'crying', 'eating', 'speaking', 'flying', 'soaring', 'gingerbread', 'human-like', 'wild', 'shining', 'big eyes', 'punk', 'cool', 'cute', 'funny', 'hippy', 'boho', 'elegant', 'powerful', 'day of the dead makeup', 'smoky eyes makeup', 'bright makeup', 'looking at the camera', 'one', 'two', 'three', 'four', 'white', 'black', 'grey', 'beige', 'neon'];
  const optionsEmocao = ['no style', 'funny', 'happy', 'cute', 'playful', 'grumpy', 'angry', 'sad', 'depressed', 'excited', 'dreamy', 'calm', 'zen', 'romantic', 'adventure', 'surprised', 'creepy', 'spooky', 'epic', 'festive'];
  const optionsCamadaPosterior = ['no style', 'flowers', 'hearts', 'flowers and hearts', 'sparkels', 'watercolor clouds', 'paint splatter', 'brush strokes', 'dots', 'squares', 'circles', 'abstract figures', 'space', 'horizontal stripes', 'vertical stripes', 'vintage sunset graphic', 'sunset', 'wings', 'lightnings', 'snowflakes', 'stars', 'rays of light', 'American flag', 'encircled with clear outlines', 'encased by a square with well defined outlines', 'in a circular frame', 'in a square frame'];
  const optionsFundo = ['white', 'black', 'grey', 'beige', 'green', 'blue', 'red', 'pink', 'yellow', 'orange', 'purple', 'violet', 'turquoise', 'magenta', 'cyan'];
  const optionsPaletaCores = ['no style', 'monochrome', 'light', 'dark', 'pale', 'bright', 'retro', 'desaturated', 'saturated', 'subtle', 'muted', 'mild tones', 'vintage', 'ombre shading', 'pure', 'matte', 'faded', 'rich', 'vivid', 'vibrant', 'acid', 'shiny', 'luminescent', 'glowing', 'glittery', 'metallic', 'neon', 'duotone', 'color pop'];
  const optionsEstiloArtistico = ['no style', 'airbrush art', 'acrylic paint', 'gouache', 'ink and line art', 'oil paint', 'vector art', 'watercolor paint', '2D video game art', '8-bit art', 'Chinese MMO', 'comic art', 'cyberpunk', 'digital art', 'Disney', 'Japanese anime art', 'steampunk', 'batik', 'cute kawaii', 'cyber guochao', 'folk art', 'gothic art', 'graffiti art', 'pop art', 'tilt-shift photography'];
  const optionsParametrosAdicionar = ['no style', '--v 7', '--v 6.1', '--v 6.0', '--v 5.2', '--v 5.1', '--v 5.0', '--niji 6', '--niji 5', '--niji 4', '--v 4.0', '--v 3.0', '--v 2.0', '--v 1.0', '--s 0', '--s 10', '--s 50', '--s 100', '--s 250', '--s 300', '--s 500', '--s 750', '--s 1000', '--style raw', '--ar 1:1', '--ar 9:16', '--ar 16:9', '--ar 1:2', '--ar 2:1', '--ar 3:4', '--ar 4:3', '--ar 2:3', '--ar 3:2'];
  const optionsParametrosExcluir = ['no style', '--no tshirt', '--no humans, people, children, men, women', '--no text', '--no face', '--no frame', '--no colors', '--no heart', '--no wings', '--no freckles', '--no anatomic', '--no animals', '--no flowers', '--no stem, leaves', '--no shading', '--no gradient', '--no shading, gradient', '--no skulls', '--no white', '--no grey', '--no black', '--no yellow', '--no orange', '--no pink', '--no red', '--no blue', '--no green', '--no purple'];

  return (
    <div className="flex flex-col items-center p-4 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Construtor de Prompt's Profissional</h1>

      <div className="w-full bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Design</h2>
        <div className="flex flex-wrap">
          {renderDropdown('Produto Digital', 'produto', optionsProduto)}
          {renderDropdown('Tema', 'tema', optionsTema)}
          {renderDropdown('Design Principal', 'designPrincipal', optionsDesignPrincipal)}
          {renderDropdown('Detalhes do Design', 'detalhesDesign', optionsDetalhesDesign)}
          {renderDropdown('Emoção', 'emocao', optionsEmocao)}
          {renderDropdown('Design da Camada Posterior', 'camadaPosterior', optionsCamadaPosterior)}
          {renderDropdown('Fundo', 'fundo', optionsFundo)}
          {renderInput('Design Personalizado', 'designPersonalizado')}
          {renderInput('Detalhes Personalizados', 'detalhesPersonalizados')}
        </div>
      </div>

      <div className="w-full bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Style</h2>
        <div className="flex flex-wrap">
          {renderDropdown('Paleta de Cores', 'paletaCores', optionsPaletaCores)}
          {renderInput('Cores Personalizadas', 'coresPersonalizadas')}
          {renderDropdown('Estilo Artístico', 'estiloArtistico', optionsEstiloArtistico)}
          {renderInput('Estilo ou Detalhes Personalizados', 'estiloOuDetalhesPersonalizados')}
        </div>
      </div>

      <div className="w-full bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Parameters</h2>
        <div className="flex flex-wrap">
          {renderDropdown('Parâmetros a Adicionar', 'parametrosAdicionar', optionsParametrosAdicionar)}
          {renderDropdown('Parâmetros a Excluir', 'parametrosExcluir', optionsParametrosExcluir)}
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={gerarPrompt} className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition">Gerar Prompt</button>
        <button onClick={() => setFormData(initialState)} className="bg-gray-600 text-white px-6 py-3 rounded text-lg hover:bg-gray-700 transition">Limpar</button>
      </div>

      {promptFinal && (
        <div className="mt-4 p-4 border rounded w-full bg-gray-100">
          <h2 className="font-semibold mb-2">Prompt Gerado:</h2>
          <p className="mb-2">{promptFinal}</p>
          <button onClick={copiarPrompt} className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Copiar Prompt</button>
        </div>
      )}
    </div>
  );
};

export default PromptBuilder;