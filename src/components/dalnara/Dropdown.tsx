import Icon from "components/Icon";
import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "styles/color";

interface DropdownProps {
  options: string[]; // 드롭다운 옵션들의 배열
  onSelect: (selectedOption: string) => void; // 옵션 선택 시 호출할 콜백 함수
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <StyledDropdownContainer>
      <StyledDropdownButton onClick={toggleDropdown}>
        {selectedOption || (
          <>
            <StyledNaviWrapper>
              <Icon name="navigation" height={20} width={20} />
              <span>정렬</span>
            </StyledNaviWrapper>
          </>
        )}
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownList>
          {options.map((option, index) => (
            <StyledDropdownListItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </StyledDropdownListItem>
          ))}
        </StyledDropdownList>
      )}
    </StyledDropdownContainer>
  );
};

export default Dropdown;

const StyledDropdownContainer = styled.div`
  width: 13rem;
  height: 4.8rem;
  position: relative;
  display: inline-block;
`;

const StyledDropdownButton = styled.button`
  width: 100%;
  height: 100%;
  border: 0.3rem solid ${COLORS.GREEN};
  border-radius: 2.5rem;
  font-size: 24px;
  background-color: ${COLORS.WHITE};
  cursor: pointer;
`;

const StyledDropdownList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  border: 0.3rem solid ${COLORS.GREEN};
  border-radius: 2rem;
  background-color: ${COLORS.WHITE};
  font-size: 24px;
  position: absolute;
  overflow: hidden;
`;

const StyledDropdownListItem = styled.li`
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.LIGHT_GREY};
  }

  &:not(:last-child) {
    border-bottom: 0.2rem solid ${COLORS.GREEN};
  }
`;

const StyledNaviWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
