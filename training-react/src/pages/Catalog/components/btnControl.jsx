import React from 'react'

export default function BtnControl() {
    return (
        <div class="group-control">
            <div class="btn-prev">
                <i class="fa-solid fa-angle-left"></i> Prev
            </div>
            <div class="pagination">
                <div class="active">1</div>
                <div>2</div>
                <div className='dpnone'>3</div>
                <div className='dpnone'>4</div>
                <div className='dpnone'>5</div>
            </div>
            <div class="btn-next">
                Next <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}
