import React from "react";

const InfoRow: React.FC<{ infoType: string; info: string }> = ({
  infoType,
  info,
}) => {
  const inputBox = (
    <label>
      {infoType === "Bio" ? (
        <textarea
          cols={20}
          defaultValue={info}
          className="info-row__content"
          style={{ resize: "none", height: "100px" }}
          name={infoType}
        />
      ) : (
        <input
          type="text"
          defaultValue={info}
          className="info-row__content"
          name={infoType}
        />
      )}
    </label>
  );

  return (
    <div className="info-row">
      <p className="info-row__type">{infoType}</p>
      {inputBox}
    </div>
  );
};

export default InfoRow;
