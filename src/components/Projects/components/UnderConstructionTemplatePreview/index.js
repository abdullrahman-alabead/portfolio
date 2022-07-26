import './index.scss'
import test from '../../../../assets/images/test.png'

export default function UnderConstructionTemplatePreview() {

  return (
    <div className='preview-box underConstruction-preview'>
      <div className='project-name'>Mystery</div>
      <div className='container'>
      <img src={test} className="tape-1" />
      <img src={test} className="tape-2" />
      <img src={test} className="tape-3" />
      <p>Under Construction</p>
      </div>
      
    </div>
  )
}