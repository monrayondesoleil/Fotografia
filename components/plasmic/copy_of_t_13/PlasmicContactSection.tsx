// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2C8X9T9xBuGbL117TTMfpr
// Component: JzoGLBliw4vf

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 2C8X9T9xBuGbL117TTMfpr/projectcss
import sty from "./PlasmicContactSection.module.css"; // plasmic-import: JzoGLBliw4vf/css

createPlasmicElementProxy;

export type PlasmicContactSection__VariantMembers = {};
export type PlasmicContactSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactSection__VariantsArgs;
export const PlasmicContactSection__VariantProps = new Array<VariantPropType>();

export type PlasmicContactSection__ArgsType = {
  phoneNumber?: string;
  address?: string;
};
type ArgPropType = keyof PlasmicContactSection__ArgsType;
export const PlasmicContactSection__ArgProps = new Array<ArgPropType>(
  "phoneNumber",
  "address"
);

export type PlasmicContactSection__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
};

export interface DefaultContactSectionProps {
  phoneNumber?: string;
  address?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactSection__RenderFunc(props: {
  variants: PlasmicContactSection__VariantsArgs;
  args: PlasmicContactSection__ArgsType;
  overrides: PlasmicContactSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          phoneNumber: "+0123456789",
          address: "lutry hive digital"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___33ZAm)}>
        <div
          className={classNames(projectcss.all, sty.freeBox__tkxng)}
          id={"contact"}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__aNnSn)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"CONTACT "}
            </h1>
            <div className={classNames(projectcss.all, sty.freeBox__h33Rb)}>
              <div className={classNames(projectcss.all, sty.freeBox__u3W36)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__m1IgE
                  )}
                  component={Link}
                  href={(() => {
                    try {
                      return "tel:" + $props.phoneNumber;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  platform={"nextjs"}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__f8DIo
                    )}
                  >
                    {"Call us \u2794"}
                  </h2>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__b2766)}
                  />
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__oQo4R)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__sjDGy
                  )}
                  component={Link}
                  onClick={async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                return window.open(
                                  "https://www.google.com/maps/place?q=" +
                                    $props.address +
                                    "zoom=20",
                                  "_blank"
                                );
                              })();
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }
                  }}
                  platform={"nextjs"}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__aj79H
                    )}
                  >
                    {"COME TO OUR OFFICE \u2794"}
                  </h2>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pYfTq)}
                  />
                </PlasmicLink__>
              </div>
            </div>
          </Stack__>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactSection__VariantsArgs;
    args?: PlasmicContactSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactSection__ArgProps,
          internalVariantPropNames: PlasmicContactSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactSection";
  } else {
    func.displayName = `PlasmicContactSection.${nodeName}`;
  }
  return func;
}

export const PlasmicContactSection = Object.assign(
  // Top-level PlasmicContactSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicContactSection
    internalVariantProps: PlasmicContactSection__VariantProps,
    internalArgProps: PlasmicContactSection__ArgProps
  }
);

export default PlasmicContactSection;
/* prettier-ignore-end */
