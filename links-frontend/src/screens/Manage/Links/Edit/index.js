import React, { useEffect } from 'react';
import Layout from '../../../Layouts/Manage'
import FormGroup from '../../../../components/FormGroup'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { linkGet } from '../../../../actions/LinkActions'

const Edit = ({ link, linkGet }) => {

    const { id } = useParams()

    useEffect(() => {
        linkGet(id)
    }, [id, linkGet])


    return (
        <Layout>
            <h1>Edit Link</h1>
        <div>
                <form>
                <FormGroup label="label" name="label" data={link} type="text" />
                    <div className="form-group">
                        <label>Url</label>
                        <input type="text" className="form-control" value={link && link.url}/>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial" />
                            <span className="form-check-sign"></span>
                            Is Social
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return { 
        link: state.link.link
    }
}

export default connect(mapStateToProps, { linkGet })(Edit)