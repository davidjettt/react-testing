import {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios'
import Papa from 'papaparse'
import Button from './components/Button/Button';


function App() {
  const [joke, setJoke] = useState<any>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [file, setFile] = useState<any>('')
  const [parsedData, setParsedData] = useState<any>([])
  const [rows, setRows] = useState<any>([])
  const [values, setValues] = useState<any>([])

  const getData = () => {
    axios.get('/test')
      .then(({data}) => {
        setJoke(data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return

    const file = e.target.files[0]
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: any) => {
        const rowsArr = Object.keys(results.data[0])
        const valuesArr: any = []
        results.data.map((d:any) => {
          valuesArr.push(Object.values(d))
        })
        console.log('VALUES', valuesArr)
        setParsedData(results.data)
        setRows(rowsArr)
        setValues(valuesArr)
      }
    })
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

  }

  // if (isLoading) return <>Loading......</>

  return (
    <div className="App">
      <span data-testid='span'>{joke.message}</span>
      {file && <img style={{width: 300, height: 300}} src={file} />}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          name='file'
          onChange={handleFileUpload}
        />
        <button>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            {rows.map((row: any, idx: any) => (
              <th key={idx}>
                {row}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((val: any, idx: any) => (
            <tr key={idx}>
              {val.map((v:any, i:any) => (
                <td key={i} style={{textAlign: 'center'}}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <Button />
    </div>
  );
}

export default App;
