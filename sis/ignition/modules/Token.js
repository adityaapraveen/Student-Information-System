// StudentInformationSystem.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const StudentModule = buildModule("StudentModule", (m) => {
  const token = m.contract("StudentInformationSystem");

  return { token };
});

module.exports = StudentModule;