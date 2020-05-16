import styled, { css } from 'styled-components'

export const StyledLimit = styled.div`
  ${({ theme: { ns } }) => css`
    .${ns}Tree {
      &-itemLabel {
        padding-left: 0 !important;
        &:hover {
          background: transparent;
        }
      }
      &-item--isLeaf {
        display: inline-block;
        & > .${ns}Tree-itemLabel {
          margin-right: 10px;
        }
      }
      &-list {
        & > .${ns}Tree-item--isLeaf {
          display: block;
        }
      }
      &-sublist {
        margin-left: 20px;
      }
    }

    &.limit-modal-drawer {
      .${ns}Tabs-pane {
        position: absolute;
        height: calc(100% - 190px);
        overflow-y: auto;
      }
    }
  `}

  .action-btns {
    margin-bottom: 5px;
  }
`
