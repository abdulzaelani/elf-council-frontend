import React, { ReactElement } from "react";
import Button from "src/ui/base/Button/Button";
import Card, { CardVariant } from "src/ui/base/Card/Card";
import { ButtonVariant } from "src/ui/base/Button/styles";
import H2 from "src/ui/base/H2/H2";
import ClaimAmountCard from "./ClaimAmountCard";
import { t } from "ttag";

interface EligibleCardProps {
  className?: string;
  onPreviousStep?: () => void;
  onNextStep?: () => void;
}

// PLACEHOLDER
const ELFI_TOKEN_AMOUNT = "10000.0";

export default function EligibleCard({
  className,
  onPreviousStep,
  onNextStep,
}: EligibleCardProps): ReactElement {
  return (
    <Card className={className} variant={CardVariant.BLUE}>
      <div className="flex flex-col gap-2 p-2 text-white sm:px-6 sm:py-4">
        <div className="mb-12 text-center text-white sm:items-center sm:px-10 sm:text-center md:px-32">
          <h1 className="mb-2 text-3xl font-semibold">{t`Congratulations!`}</h1>
          <H2 className="mb-10 text-2xl text-votingGreen">{t`You're eligible for this Airdrop`}</H2>
          <ClaimAmountCard amount={ELFI_TOKEN_AMOUNT} />
        </div>
        <div className="flex justify-between">
          {onPreviousStep && (
            <Button
              className="px-12"
              variant={ButtonVariant.WHITE}
              onClick={onPreviousStep}
            >
              {t`Back`}
            </Button>
          )}
          {onNextStep && (
            <Button
              className="px-12"
              variant={ButtonVariant.GRADIENT}
              onClick={onNextStep}
            >
              {t`Next`}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
