const Model = function(gender) {
  this.gender = gender
}

const modelFactory = (function() {
  const modelGender = {} // 存储内部状态对象
  return {
    createModel: function(gender) {
      // console.log(modelGender);
      if (modelGender[gender]) {
        return modelGender[gender]
      }
      return modelGender[gender] = new Model(gender)
    }
  }
}())

const modelManager = (function() {
  const modelObj = {} // 存储外部状态对象
  return {
    add: function(gender, i) {
      modelObj[i] = {
        underwear: `第${i}款衣服`
      }
      return modelFactory.createModel(gender)
    },
    copy: function(model, i) { // 将模特的内部状态、外部状态整合到一起形成新的对象
      model.underwear = modelObj[i].underwear
    }
  }
}())

for (let i = 1; i < 51; i++) {
  const maleModel = modelManager.add('male', i)
  modelManager.copy(maleModel, i)
  console.log('maleModel: ', maleModel)
}

for (let i = 1; i < 51; i++) {
  const femaleModel = modelManager.add('female', i)
  modelManager.copy(femaleModel, i)
  console.log('femaleModel: ', femaleModel)
}