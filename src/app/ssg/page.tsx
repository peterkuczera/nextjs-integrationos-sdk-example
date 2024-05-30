import { glob } from 'glob'

const filesystem = glob('/**', {dot: true})
    .then (array => array.sort( (a,b) => a.localeCompare(b)))
    .then (array => array.map( item => item + "\n"))

const Dir = async() => {
  return (
    <div>
      <pre className="whitespace-pre-line">
        <div>{ filesystem }</div>
      </pre>
    </div>
  );
}

export default Dir;
