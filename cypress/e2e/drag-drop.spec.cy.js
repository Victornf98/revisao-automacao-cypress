
  it('must drag Cypress to Node.js', () => {
    
    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')
    const dataTransfer = new DataTransfer()
    //localizar o objeto e o campo que irá soltá-lo e depois colocar a funcao trigger
    cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer })
    cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer })

  })

  it('must drag Robot to Python', () => {

    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')
    const dataTransfer = new DataTransfer()

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})
    cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })

  })


